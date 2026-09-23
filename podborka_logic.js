(function () {
  const STORAGE_KEY = 'arrows_podborka_v1';
  const SEND_LINKS = {
    telegram: 'https://t.me/ArtemRielty',
    max: 'https://max.ru/u/f9LHodD0cOLMLNnY1ubTDhHHWJf6c5SEHy4MFFDpDTLiP-if3HImFtthI-o',
    whatsappPhone: '79618571772',
  };
  const MAX_OBJECTS_PER_FILE = 10;

  // ---- ХРАНИЛИЩЕ ----
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      if (!parsed) return { items: [], agent: { name: '', phone: '', photo: '' } };
      return {
        items: Array.isArray(parsed.items) ? parsed.items : [],
        agent: Object.assign({ name: '', phone: '', photo: '' }, parsed.agent || {}),
      };
    } catch (e) {
      return { items: [], agent: { name: '', phone: '', photo: '' } };
    }
  }
  function saveState(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
    renderAll();
  }

  function normalizeUrl(u) {
    try {
      const x = new URL(u, location.origin);
      return (x.origin + x.pathname).replace(/\/+$/, '');
    } catch (e) {
      return String(u || '').split('?')[0].replace(/\/+$/, '');
    }
  }
  function escapeHtmlLocal(str) {
    return (str || '').toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function api() { return window.ArrowsPDF || null; }

  // ---- СОБСТВЕННЫЙ ПОЛНЫЙ ПАРСЕР YML ----
  const PODBORKA_YML_URL = 'https://arrowsrealty.ru/tstore/yml/a950e007bd575604e7517f13082cfeba.yml';
  let podborkaObjects = [];
  let podborkaCatalogPromise = null;
  function ensurePodborkaCatalog() {
    if (!podborkaCatalogPromise) podborkaCatalogPromise = loadPodborkaYML().then(objs => { podborkaObjects = objs; });
    return podborkaCatalogPromise;
  }

  function parseCoords(params) {
    let lat = null, lng = null, coordStr = null;
    for (const p of params) {
      const name = p.getAttribute('name') || '';
      const val = p.textContent.trim();
      if (name === 'Широта') lat = parseFloat(val);
      if (name === 'Долгота') lng = parseFloat(val);
      if (name === 'Координаты') coordStr = val;
    }
    if (lat && lng && !isNaN(lat) && !isNaN(lng)) return [lat, lng];
    if (coordStr) {
      const parts = coordStr.split(/[,\s]+/);
      for (let i = 0; i < parts.length - 1; i++) {
        const pl = parseFloat(parts[i].replace(',', '.'));
        const pn = parseFloat(parts[i + 1].replace(',', '.'));
        if (!isNaN(pl) && !isNaN(pn)) return [pl, pn];
      }
    }
    return null;
  }

  function cutAtContactMarker(lines) {
    const kept = [];
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (/Цена/i.test(line) || /જ⁀➴/.test(line) || /^➳\s*Артём/i.test(line) || /^📞/.test(line) || /^8\s*\(/.test(line)) break;
      kept.push(line);
    }
    while (kept.length && !kept[kept.length - 1]) kept.pop();
    while (kept.length && !kept[0]) kept.shift();
    return kept.join('\n');
  }

  function cleanDescription(raw) {
    if (!raw) return '';
    let t = raw.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '').replace(/\[CDATA\[/g, '').replace(/\]\]>/g, '');
    t = t.replace(/\uFFFD/g, '');
    t = t.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');
    return cutAtContactMarker(t.split('\n'));
  }

  async function loadPodborkaYML() {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      let resp;
      try { resp = await fetch(PODBORKA_YML_URL, { signal: controller.signal }); } finally { clearTimeout(timer); }
      const xml = await resp.text();
      const doc = new DOMParser().parseFromString(xml, 'text/xml');
      const objects = [];
      doc.querySelectorAll('offer').forEach(off => {
        const name = off.querySelector('name')?.textContent || '';
        const priceRaw = parseInt(off.querySelector('price')?.textContent || '0', 10);
        const url = off.querySelector('url')?.textContent || '#';
        const image = off.querySelector('picture')?.textContent || off.querySelector('image')?.textContent || '';

        const paramsArr = Array.from(off.querySelectorAll('param'));
        const paramMap = {};
        let vendor = '';
        let vendorCode = off.querySelector('vendorCode')?.textContent?.trim() || '';
        for (const p of paramsArr) {
          const pn = p.getAttribute('name') || '';
          const pv = p.textContent.trim();
          if (pn === 'vendor' || pn === 'Производитель' || pn === 'Бренд') vendor = pv;
          if (!vendorCode && (pn === 'vendorCode' || pn === 'Артикул')) vendorCode = pv;
          paramMap[pn] = pv;
        }

        let descRaw = '';
        const descElem = off.querySelector('description');
        if (descElem) {
          try { descRaw = descElem.innerHTML || ''; } catch (e) {}
          if (!descRaw) {
            try { descRaw = descElem.textContent || ''; } catch (e) {}
          }
          descRaw = descRaw.replace(/^\s*<!\[CDATA\[/i, '').replace(/\]\]>\s*$/i, '');
        }

        const cleanDesc = cleanDescription(descRaw);

        const coords = parseCoords(paramsArr);
        const pictureTags = off.querySelectorAll('picture');
        const pictures = pictureTags.length > 0
          ? Array.from(pictureTags).map(p => p.textContent.trim())
          : (image ? [image] : []);

        objects.push({
          name, url, vendorCode, image, vendor,
          priceRaw: isNaN(priceRaw) ? '' : priceRaw,
          price: isNaN(priceRaw) ? '' : priceRaw.toLocaleString('ru-RU'),
          cleanDescription: cleanDesc,
          params: paramMap,
          coords,
          pictures,
        });
      });

      const withDesc = objects.filter(o => o.cleanDescription && o.cleanDescription.length).length;
      console.log(`📦 Подборка: объектов ${objects.length}, из них с описанием ${withDesc}`);

      return objects;
    } catch (e) {
      console.warn('⚠️ Подборка: не удалось загрузить список объектов для отображения:', e);
      return [];
    }
  }

  function getObjectsForList() {
    const a = api();
    if (a) {
      try { const objs = a.getAllObjects(); if (objs && objs.length) return objs; } catch (e) {}
    }
    return podborkaObjects;
  }
  function ensureAnyCatalog() {
    const a = api();
    const p1 = a ? a.ensureCatalogLoaded().catch(() => {}) : Promise.resolve();
    const p2 = ensurePodborkaCatalog().catch(() => {});
    return Promise.all([p1, p2]);
  }
  function objThumb(obj) {
    if (!obj) return '';
    if (obj.pictures && obj.pictures.length) return obj.pictures[0];
    return obj.image || '';
  }

  function isInPodborka(url) {
    const state = loadState();
    return state.items.some(it => it.id === normalizeUrl(url));
  }
  function toggleItem(url, priceHint) {
    const state = loadState();
    const nid = normalizeUrl(url);
    const idx = state.items.findIndex(it => it.id === nid);
    if (idx >= 0) state.items.splice(idx, 1);
    else state.items.push({ id: nid, price: priceHint || '', addedAt: Date.now() });
    saveState(state);
  }

  /* ============================================================
     КНОПКИ «В ПОДБОРКУ» — КАТАЛОГ
     ============================================================ */
  function cardPriceHint(card) {
    const priceEl = card.querySelector('.t-store__card__price');
    return priceEl ? priceEl.textContent.replace(/[^\d]/g, '') : '';
  }

  function renderCardButtons() {
    document.querySelectorAll('.t-store__card[data-product-url]').forEach(card => {
      const wrapper = card.querySelector('.js-store-buttons-wrapper');
      if (!wrapper) return;
      const url = card.dataset.productUrl;
      if (!url) return;
      let btn = card.querySelector('.btn-podborka-card');
      if (!btn) {
        btn = document.createElement('a');
        btn.href = 'javascript:void(0)';
        btn.className = 'btn-podborka-card';
        btn.dataset.active = 'false';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleItem(url, cardPriceHint(card));
        });
        wrapper.parentNode.insertBefore(btn, wrapper.nextSibling);
      }
      const active = isInPodborka(url);
      const wasActive = btn.dataset.active === 'true';
      btn.classList.toggle('active', active);
      btn.textContent = active ? '✓ В подборке — убрать' : '➳ В подборку';
      if (active && !wasActive) {
        btn.classList.remove('just-added');
        void btn.offsetWidth;
        btn.classList.add('just-added');
      }
      btn.dataset.active = active ? 'true' : 'false';
    });
  }

  /* ============================================================
     КНОПКА «В ПОДБОРКУ» — СТРАНИЦА ТОВАРА
     ============================================================ */
  const PODBORKA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12a1 1 0 0 1 1 1v16.5a.5.5 0 0 1-.8.4L12 17l-6.2 3.9a.5.5 0 0 1-.8-.4V4a1 1 0 0 1 1-1z"/></svg>';
  function makeProductButtonLabel(active) {
    return `<span class="btn-icon">${PODBORKA_ICON}</span><span class="btn-label">${active ? 'В подборке — убрать' : 'Добавить в подборку'}</span><span class="btn-arrow-spin btn-arrow-right">➳</span>`;
  }
  function currentProductPriceHint() {
    const a = api();
    const cp = a && a.getCurrentProduct && a.getCurrentProduct();
    return cp ? (cp.priceRaw || '') : '';
  }
  function renderProductButton() {
    const wrap = document.getElementById('btn-presentation-wrap');
    if (!wrap) return;
    const url = location.href;
    let btn = wrap.querySelector('.btn-podborka-product');
    if (!btn) {
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn-presentation btn-podborka-product';
      btn.dataset.active = 'false';
      btn.onclick = () => { toggleItem(url, currentProductPriceHint()); };
      wrap.appendChild(btn);
    }
    const active = isInPodborka(url);
    const wasActive = btn.dataset.active === 'true';
    btn.innerHTML = makeProductButtonLabel(active);
    btn.classList.toggle('active', active);
    if (active && !wasActive) {
      btn.classList.remove('just-added');
      void btn.offsetWidth;
      btn.classList.add('just-added');
    }
    btn.dataset.active = active ? 'true' : 'false';
  }

  /* ============================================================
     ПЛАВАЮЩАЯ КНОПКА «ПОДБОРКА» + ПАНЕЛЬ
     ============================================================ */
  let lastPillCount = 0;
  function renderPill() {
    const state = loadState();
    let pill = document.getElementById('podborka-pill');
    if (!pill) {
      pill = document.createElement('div');
      pill.id = 'podborka-pill';
      pill.className = 'podborka-pill';
      pill.innerHTML = `<span class="podborka-pill-icon">${PODBORKA_ICON}</span><span>Подборка</span><span class="podborka-pill-count">0</span>`;
      pill.addEventListener('click', openPanel);
      document.body.appendChild(pill);
    }
    const count = state.items.length;
    pill.querySelector('.podborka-pill-count').textContent = count;
    pill.classList.toggle('hidden', count === 0);
    if (count > lastPillCount) {
      pill.classList.remove('bump');
      void pill.offsetWidth;
      pill.classList.add('bump');
    }
    lastPillCount = count;
  }

  function ensureModal() {
    if (document.getElementById('podborka-overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'podborka-overlay';
    overlay.className = 'podborka-overlay';
    overlay.innerHTML = `
      <div class="podborka-modal">
        <div class="podborka-modal-header">
          <div class="podborka-title">Подборка объектов</div>
          <button class="podborka-close" aria-label="Закрыть">&times;</button>
        </div>
        <div class="podborka-modal-body">
          <div class="podborka-subtitle">Добавляйте объекты кнопкой «В подборку» на карточках и странице товара — они появятся здесь.</div>

          <div class="podborka-section-label">Объекты в подборке</div>
          <div class="podborka-list-note">Изначально указана цена с сайта. Контролируйте предложение и указывайте нужную для вас стоимость.</div>
          <div class="podborka-list-note">Стрелками ↑ ↓ можно менять порядок объектов — в таком же порядке они пойдут в PDF-презентации (что выше в списке — то раньше в файле).</div>
          <div class="podborka-list-head"><span style="margin-left:112px;">Объект</span><span>Цена, ₽</span></div>
          <div class="podborka-list" id="podborka-list"></div>
          <div class="podborka-empty" id="podborka-empty" style="display:none;">Пока пусто — добавьте объекты кнопкой «В подборку».</div>

          <div class="podborka-section-label">Ваши контакты — попадут в презентации</div>
          <div class="podborka-agent">
            <input type="text" id="podborka-agent-name" placeholder="Артём">
            <input type="tel" id="podborka-agent-phone" placeholder="+7 (000) 000-00-00">
          </div>
          <div class="podborka-static-hint" id="podborka-agent-hint"></div>
          <div class="podborka-photo-row">
            <label for="podborka-agent-photo" class="podborka-photo-label">📎 Добавить своё фото</label>
            <input type="file" id="podborka-agent-photo" accept="image/*">
            <img class="podborka-photo-preview" id="podborka-agent-photo-preview" alt="">
            <button type="button" class="podborka-photo-remove" id="podborka-agent-photo-remove" aria-label="Убрать фото">&times;</button>
          </div>

          <div class="podborka-section-label">Что сделать с подборкой</div>
          <div class="podborka-actions">
            <div class="podborka-action">
              <button class="podborka-btn podborka-btn-primary" id="podborka-download" type="button">Скачать все презентации</button>
              <div class="podborka-action-hint">Один PDF-файл; если объектов больше 10 — несколько файлов подряд</div>
            </div>
            <div class="podborka-action">
              <button class="podborka-btn" id="podborka-download-plain" type="button">Скачать без цены и номера</button>
              <div class="podborka-action-hint">Та же подборка, но без цены и контактов на обложке — можно переслать как есть</div>
            </div>
            <div class="podborka-action">
              <button class="podborka-btn" id="podborka-send-toggle" type="button">Отправить подборку мне в мессенджер</button>
              <div class="podborka-action-hint">Откроет чат со мной — согласуем показы и детали по объектам</div>
            </div>
          </div>
          <div class="podborka-send-row" id="podborka-send-row">
            <a class="podborka-send-btn" id="podborka-send-tg" target="_blank" rel="noopener">Telegram</a>
            <a class="podborka-send-btn" id="podborka-send-max" target="_blank" rel="noopener">MAX</a>
            <a class="podborka-send-btn" id="podborka-send-wa" target="_blank" rel="noopener">WhatsApp</a>
          </div>
          <div class="podborka-hint" id="podborka-hint">Текст сообщения уже скопирован — если мессенджер откроется пустым, просто вставьте его (Ctrl+V).</div>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => { if (e.target === overlay) closePanel(); });
    overlay.querySelector('.podborka-close').onclick = closePanel;
    overlay.querySelector('#podborka-download').onclick = () => downloadAllPresentations(true);
    overlay.querySelector('#podborka-download-plain').onclick = () => downloadAllPresentations(false);
    overlay.querySelector('#podborka-agent-hint').textContent =
      'Показываются на обложке и в конце каждой презентации. Поле оставите пустым — сформируется презентация без этих данных.';
    overlay.querySelector('#podborka-send-toggle').onclick = () => {
      const row = document.getElementById('podborka-send-row');
      const hint = document.getElementById('podborka-hint');
      const show = row.style.display !== 'flex';
      row.style.display = show ? 'flex' : 'none';
      hint.style.display = show ? 'block' : 'none';
      if (show) refreshSendLinks();
    };

    const nameInput = overlay.querySelector('#podborka-agent-name');
    const phoneInput = overlay.querySelector('#podborka-agent-phone');
    nameInput.oninput = () => { const s = loadState(); s.agent.name = nameInput.value; saveState(s); };
    phoneInput.oninput = () => { const s = loadState(); s.agent.phone = phoneInput.value; saveState(s); };

    // ---- СВОЁ ФОТО ДЛЯ ПРЕЗЕНТАЦИИ ----
    const photoInput = overlay.querySelector('#podborka-agent-photo');
    const photoPreview = overlay.querySelector('#podborka-agent-photo-preview');
    const photoRemove = overlay.querySelector('#podborka-agent-photo-remove');

    function renderPhotoPreview(dataUrl) {
      if (dataUrl) {
        photoPreview.src = dataUrl;
        photoPreview.style.display = 'block';
        photoRemove.style.display = 'inline-flex';
      } else {
        photoPreview.src = '';
        photoPreview.style.display = 'none';
        photoRemove.style.display = 'none';
      }
    }
    overlay._renderPhotoPreview = renderPhotoPreview;

    function cropPhotoToCircle(source) {
      const size = 400;
      const iw = source.naturalWidth || source.width;
      const ih = source.naturalHeight || source.height;
      const srcSize = Math.min(iw, ih);
      const sx = (iw - srcSize) / 2;
      const sy = (ih - srcSize) / 2;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(source, sx, sy, srcSize, srcSize, 0, 0, size, size);
      ctx.restore();
      const dataUrl = canvas.toDataURL('image/png');
      canvas.width = 0;
      canvas.height = 0;
      return dataUrl;
    }

    photoInput.onchange = function (e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const objUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        try {
          const dataUrl = cropPhotoToCircle(img);
          const s = loadState();
          s.agent.photo = dataUrl;
          saveState(s);
          renderPhotoPreview(dataUrl);
        } catch (err) {
          console.warn('⚠️ Подборка: не удалось обработать фото:', err);
        } finally {
          URL.revokeObjectURL(objUrl);
          photoInput.value = '';
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(objUrl);
        photoInput.value = '';
      };
      img.src = objUrl;
    };

    photoRemove.onclick = () => {
      const s = loadState();
      s.agent.photo = '';
      saveState(s);
      renderPhotoPreview('');
    };
  }

  function openPanel() {
    ensureModal();
    const overlay = document.getElementById('podborka-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    const state = loadState();
    document.getElementById('podborka-agent-name').value = state.agent.name || '';
    document.getElementById('podborka-agent-phone').value = state.agent.phone || '';
    if (overlay._renderPhotoPreview) overlay._renderPhotoPreview(state.agent.photo || '');
    renderList();
    ensureAnyCatalog().then(renderList);
  }
  function closePanel() {
    const overlay = document.getElementById('podborka-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    const row = document.getElementById('podborka-send-row');
    const hint = document.getElementById('podborka-hint');
    if (row) row.style.display = 'none';
    if (hint) hint.style.display = 'none';
  }

  function renderList() {
    const listEl = document.getElementById('podborka-list');
    if (!listEl) return;
    const emptyEl = document.getElementById('podborka-empty');
    const state = loadState();
    if (!state.items.length) {
      listEl.innerHTML = '';
      emptyEl.style.display = 'block';
      refreshSendLinks();
      return;
    }
    emptyEl.style.display = 'none';
    const allObjects = getObjectsForList();
    listEl.innerHTML = state.items.map((item, idx) => {
      const obj = allObjects.find(o => normalizeUrl(o.url) === item.id);
      const title = obj ? escapeHtmlLocal(obj.name) : 'Загрузка…';
      const skuLine = obj && obj.vendorCode ? `<div class="podborka-row-sku">Арт. ${escapeHtmlLocal(obj.vendorCode)}</div>` : '';
      const priceVal = (item.price !== '' && item.price != null) ? item.price : (obj ? (obj.priceRaw || '') : '');
      const sitePriceRaw = obj ? (obj.priceRaw || '') : '';
      const sitePriceText = sitePriceRaw
        ? `на сайте: ${Number(sitePriceRaw).toLocaleString('ru-RU')} ₽`
        : '';
      const thumbUrl = objThumb(obj);
      const objUrl = obj ? escapeHtmlLocal(obj.url) : '';
      const thumbInner = thumbUrl
        ? `<img class="podborka-row-thumb" src="${escapeHtmlLocal(thumbUrl)}" alt="">`
        : `<div class="podborka-row-thumb podborka-row-thumb-empty"></div>`;
      const thumb = objUrl
        ? `<a class="podborka-row-thumb-link" href="${objUrl}" target="_blank" rel="noopener">${thumbInner}</a>`
        : thumbInner;
      const nameContent = `${title}${skuLine}`;
      const nameBlock = objUrl
        ? `<a class="podborka-row-name" href="${objUrl}" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">${nameContent}</a>`
        : `<div class="podborka-row-name">${nameContent}</div>`;
      return `<div class="podborka-row">
        ${thumb}
        ${nameBlock}
        <div class="podborka-row-controls">
          <div class="podborka-row-move">
            <button class="podborka-row-move-btn podborka-row-move-up" data-idx="${idx}" type="button" aria-label="Переместить выше"${idx === 0 ? ' disabled' : ''}>&#9650;</button>
            <button class="podborka-row-move-btn podborka-row-move-down" data-idx="${idx}" type="button" aria-label="Переместить ниже"${idx === state.items.length - 1 ? ' disabled' : ''}>&#9660;</button>
          </div>
          <div class="podborka-row-price-stack">
            <input type="text" inputmode="numeric" class="podborka-row-price" data-idx="${idx}" placeholder="Цена, ₽" value="${escapeHtmlLocal(String(priceVal))}">
            <span class="podborka-row-site-price${sitePriceText ? '' : ' empty'}">${escapeHtmlLocal(sitePriceText) || '&nbsp;'}</span>
          </div>
          <button class="podborka-row-remove" data-idx="${idx}" type="button" aria-label="Убрать">&times;</button>
        </div>
      </div>`;
    }).join('');
    listEl.querySelectorAll('.podborka-row-remove').forEach(b => {
      b.onclick = () => {
        const row = b.closest('.podborka-row');
        if (row) {
          row.classList.add('podborka-row-removing');
          setTimeout(() => {
            const s = loadState(); s.items.splice(Number(b.dataset.idx), 1); saveState(s);
          }, 200);
        } else {
          const s = loadState(); s.items.splice(Number(b.dataset.idx), 1); saveState(s);
        }
      };
    });
    listEl.querySelectorAll('.podborka-row-move-up').forEach(b => {
      b.onclick = () => {
        if (b.disabled) return;
        const s = loadState();
        const i = Number(b.dataset.idx);
        if (i <= 0) return;
        [s.items[i - 1], s.items[i]] = [s.items[i], s.items[i - 1]];
        saveState(s);
      };
    });
    listEl.querySelectorAll('.podborka-row-move-down').forEach(b => {
      b.onclick = () => {
        if (b.disabled) return;
        const s = loadState();
        const i = Number(b.dataset.idx);
        if (i >= s.items.length - 1) return;
        [s.items[i + 1], s.items[i]] = [s.items[i], s.items[i + 1]];
        saveState(s);
      };
    });
    listEl.querySelectorAll('.podborka-row-price').forEach(inp => {
      inp.oninput = () => { const s = loadState(); s.items[Number(inp.dataset.idx)].price = inp.value; };
      inp.onblur = () => { const s = loadState(); s.items[Number(inp.dataset.idx)].price = inp.value; saveState(s); };
    });
    refreshSendLinks();
  }

  function syncPanelIfOpen() {
    const overlay = document.getElementById('podborka-overlay');
    if (!overlay || !overlay.classList.contains('active')) return;
    const active = document.activeElement;
    if (active && active.classList && active.classList.contains('podborka-row-price')) return;
    renderList();
  }

  /* ============================================================
     ОТПРАВКА В МЕССЕНДЖЕР
     ============================================================ */
  function buildMessage(items) {
    let msg = 'Здравствуйте! Хочу согласовать показ по подборке объектов:';
    if (items.length) {
      msg += '\n\n' + items.map((it, i) => {
        const head = it.sku ? `${i + 1}. ${it.name} (арт. ${it.sku})` : `${i + 1}. ${it.name}`;
        return it.url ? `${head}\n${it.url}` : head;
      }).join('\n\n');
    }
    return msg;
  }
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).catch(() => {});
  }
  function refreshSendLinks() {
    const tg = document.getElementById('podborka-send-tg');
    const max = document.getElementById('podborka-send-max');
    const wa = document.getElementById('podborka-send-wa');
    if (!tg || !max || !wa) return;
    const state = loadState();
    const allObjects = getObjectsForList();
    const items = state.items.map(it => {
      const obj = allObjects.find(o => normalizeUrl(o.url) === it.id);
      return obj ? { name: obj.name, sku: obj.vendorCode, url: obj.url } : null;
    }).filter(Boolean);
    const msg = buildMessage(items);
    tg.href = SEND_LINKS.telegram + '?text=' + encodeURIComponent(msg);
    max.href = SEND_LINKS.max;
    wa.href = 'https://api.whatsapp.com/send/?phone=' + SEND_LINKS.whatsappPhone + '&text=' + encodeURIComponent(msg);
    [tg, max, wa].forEach(el => { el.onclick = () => copyToClipboard(msg); });
  }

  /* ============================================================
     ОБЩИЙ PDF ПО ПОДБОРКЕ
     ============================================================ */
  async function downloadAllPresentations(withContact) {
    const a = api();
    if (!a) {
      alert('На этой странице не подключён генератор презентаций (файл arrows_presentation.html), поэтому собрать PDF отсюда нельзя.\n\nЧтобы кнопка работала на любой странице, вставьте этот файл в общий футер сайта (Настройки сайта → Ещё → Футер), а не в код одной страницы.');
      return;
    }
    const state = loadState();
    if (!state.items.length) { alert('Подборка пуста — добавьте объекты кнопкой «В подборку».'); return; }

    // Если контакты не заполнены — скачиваем как «без цены и номера».
    const nameFilled = !!(state.agent.name && state.agent.name.trim());
    const phoneFilled = !!(state.agent.phone && state.agent.phone.trim());
    const hasContacts = nameFilled || phoneFilled;
    const effectiveWithContact = withContact && hasContacts;
    if (withContact && !hasContacts) {
      console.log('ℹ️ Подборка: контакты не заполнены — скачиваем как «без цены и номера».');
    }

    const btnId = withContact ? 'podborka-download' : 'podborka-download-plain';
    const btn = document.getElementById(btnId);
    const original = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Загружаем каталог…'; }

    try {
      await a.loadLibraries();
      await Promise.all([
        a.ensureCatalogLoaded().catch(() => {}),
        ensurePodborkaCatalog().catch(() => {}),
      ]);
      const arrowsObjects = a.getAllObjects() || [];
      const arrowsByUrl = new Map();
      arrowsObjects.forEach(o => arrowsByUrl.set(normalizeUrl(o.url), o));

      function findObj(url) {
        const key = normalizeUrl(url);
        const mine = podborkaObjects.find(o => normalizeUrl(o.url) === key);
        const theirs = arrowsByUrl.get(key);
        if (!mine && !theirs) {
          console.warn('🔍 findObj: объект не найден ни в podborka, ни в ArrowsPDF:', key);
          return null;
        }
        const merged = Object.assign({}, theirs || {}, mine || {});
        const mineDesc = (mine && mine.cleanDescription) || '';
        const theirsDesc = (theirs && theirs.cleanDescription) || '';
        merged.cleanDescription = mineDesc || theirsDesc || '';
        if (!merged.cleanDescription) {
          console.warn('⚠️ findObj: пустое описание для', key, { mineExists: !!mine, theirsExists: !!theirs });
        }
        merged.pictures = ((mine && mine.pictures && mine.pictures.length) ? mine.pictures : (theirs && theirs.pictures) || []);
        merged.params = ((mine && mine.params && Object.keys(mine.params).length) ? mine.params : (theirs && theirs.params) || {});
        merged.coords = (mine && mine.coords) || (theirs && theirs.coords) || null;
        merged.vendorCode = merged.vendorCode || (theirs && theirs.vendorCode) || (mine && mine.vendorCode) || '';
        merged.price = merged.price || (theirs && theirs.price) || (mine && mine.price) || '';
        merged.priceRaw = merged.priceRaw || (theirs && theirs.priceRaw) || (mine && mine.priceRaw) || '';
        return merged;
      }

      const { jsPDF } = window.jspdf;
      const useContact = effectiveWithContact;
      const name = useContact ? (state.agent.name || '') : '';
      const phone = useContact ? (state.agent.phone || '') : '';
      const circlePhotoDataUrl = useContact ? (state.agent.photo || '') : '';

      const chunks = [];
      for (let i = 0; i < state.items.length; i += MAX_OBJECTS_PER_FILE) {
        chunks.push(state.items.slice(i, i + MAX_OBJECTS_PER_FILE));
      }

      for (let ci = 0; ci < chunks.length; ci++) {
        const chunkItems = chunks[ci];
        const doc = new jsPDF('p', 'mm', 'a4');
        a.ensureCyrillicFont(doc);
        const pageState = { used: false };
        let addedAny = false;
        const articleCodes = [];

        for (let oi = 0; oi < chunkItems.length; oi++) {
          const item = chunkItems[oi];
          const obj = findObj(item.id);
          if (!obj) continue;
          if (btn) {
            btn.textContent = chunks.length > 1
              ? `Часть ${ci + 1}/${chunks.length}: объект ${oi + 1}/${chunkItems.length}…`
              : `Объект ${oi + 1}/${chunkItems.length}…`;
          }
          await a.buildObjectSlides(doc, obj, pageState, {
            showContact: useContact,
            name, phone,
            price: useContact ? (item.price || obj.price) : '',
            circlePhotoDataUrl,
          });
          if (obj.vendorCode) articleCodes.push(String(obj.vendorCode));
          addedAny = true;
        }
        if (!addedAny) continue;

        if (useContact) {
          a.renderContactSlideVector(doc, pageState, {
            showContact: true, name, phone,
            circlePhotoDataUrl: circlePhotoDataUrl || null,
            closingNote: 'Свяжитесь со мной для просмотра объектов',
          });
        }

        const totalPages = doc.internal.getNumberOfPages();
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(150, 150, 150);
        for (let p = 1; p <= totalPages; p++) {
          doc.setPage(p);
          doc.text(`${p} / ${totalPages}`, 105, 292, { align: 'center' });
        }

        const partSuffix = chunks.length > 1 ? `_часть${ci + 1}-${chunks.length}` : '';
        const baseName = 'Подборка' + (articleCodes.length ? ' ' + articleCodes.map(c => 'арт. ' + c).join(', ') : '');
        const filename = a.sanitizeFilename(baseName) + partSuffix + '.pdf';

        if (a.isIOS()) {
          a.showIOSReadyBanner(doc.output('blob'), chunks.length > 1 ? `PDF готов (часть ${ci + 1}/${chunks.length})` : 'PDF готов');
          await new Promise(res => setTimeout(res, 700));
        } else {
          doc.save(filename);
        }
      }

      // Все части успешно собраны — закрываем панель.
      closePanel();
    } catch (e) {
      console.error('❌ Ошибка сборки подборки:', e);
      alert('Не удалось собрать подборку.\nОшибка: ' + (e && (e.message || e.name) ? (e.message || e.name) : String(e)));
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = original; }
    }
  }

  /* ============================================================
     ОБЩИЙ РЕНДЕР + ЗАПУСК
     ============================================================ */
  function renderAll() {
    renderPill();
    renderCardButtons();
    renderProductButton();
    syncPanelIfOpen();
  }

  function boot() {
    renderAll();
    let fastTicks = 0;
    const fastTimer = setInterval(() => {
      renderAll();
      fastTicks++;
      if (fastTicks >= 20) {
        clearInterval(fastTimer);
        setInterval(renderAll, 1500);
      }
    }, 200);
  }

  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot);
})();
