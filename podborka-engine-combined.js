(function(){
  var css = "\n  /* Иконки избранного/корзины (были в исходном коде карты) */\n  .t1002__wishlisticon-img,\n  .t1002__wishlisticon-img svg,\n  .t1002__wishlisticon-img path {\n    display: inline-block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    stroke: #333333 !important;\n    stroke-width: 1.5 !important;\n    fill: none !important;\n    width: auto !important;\n    height: auto !important;\n  }\n  .t706__carticon-img,\n  .t706__carticon-img svg,\n  .t706__carticon-img path {\n    display: inline-block !important;\n    visibility: visible !important;\n    opacity: 1 !important;\n    stroke: #333333 !important;\n    stroke-width: 2 !important;\n    fill: none !important;\n    width: auto !important;\n    height: auto !important;\n  }\n\n  /* Окно \"файл готов\" (iOS) — по центру экрана, чтобы точно не потерялось\n     среди страницы, в общем стиле сайта (тёмный/бежевый, Oswald). */\n  .ios-ready-overlay {\n    position: fixed; top:0; left:0; right:0; bottom:0;\n    background: rgba(20,18,12,0.55);\n    z-index: 999998;\n    display: flex; align-items: center; justify-content: center;\n    padding: 20px; box-sizing: border-box;\n    animation: iosReadyFadeIn 0.25s ease-out;\n  }\n  .ios-ready-modal {\n    position: relative;\n    width: 100%; max-width: 360px;\n    background: #fff;\n    border-radius: 20px;\n    padding: 32px 26px 26px;\n    text-align: center;\n    font-family: 'Oswald', sans-serif;\n    box-shadow: 0 24px 64px rgba(0,0,0,0.35);\n    animation: iosReadyPopIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n  }\n  .ios-ready-modal .close {\n    position: absolute; top: 10px; right: 14px;\n    background: none; border: none; font-size: 24px; line-height: 1;\n    cursor: pointer; color: #999; padding: 4px;\n  }\n  .ios-ready-icon {\n    width: 56px; height: 56px; margin: 0 auto 16px;\n    border-radius: 50%;\n    background: #dbd0b8;\n    display: flex; align-items: center; justify-content: center;\n    animation: iosReadyPulse 1.8s ease-in-out infinite;\n  }\n  .ios-ready-icon svg { width: 26px; height: 26px; }\n  .ios-ready-title {\n    font-size: 19px; font-weight: 600; color: #222; margin-bottom: 8px;\n  }\n  .ios-ready-sub {\n    font-size: 14px; color: #777; line-height: 1.5; margin-bottom: 22px;\n  }\n  .ios-ready-open-btn {\n    display: block; width: 100%; box-sizing: border-box;\n    padding: 14px 20px;\n    background: #333; color: #dbd0b8;\n    border-radius: 40px; border: none;\n    font-family: 'Oswald', sans-serif; font-size: 15px; font-weight: 600;\n    text-decoration: none; cursor: pointer;\n    box-shadow: 0 6px 18px rgba(0,0,0,0.2);\n    transition: background 0.2s, transform 0.2s;\n  }\n  .ios-ready-open-btn:hover { background: #444; transform: translateY(-1px); }\n  @keyframes iosReadyFadeIn { from { opacity: 0; } to { opacity: 1; } }\n  @keyframes iosReadyPopIn { from { opacity: 0; transform: scale(0.9) translateY(8px); } to { opacity: 1; transform: scale(1) translateY(0); } }\n  @keyframes iosReadyPulse {\n    0%, 100% { box-shadow: 0 0 0 0 rgba(219,208,184,0.6); }\n    50% { box-shadow: 0 0 0 10px rgba(219,208,184,0); }\n  }\n\n\n\n  .podborka-page-wrap {\n    max-width: 720px;\n    margin: 0 auto;\n    padding: 32px 20px 60px;\n    font-family: 'Oswald', sans-serif;\n    box-sizing: border-box;\n  }\n  .podborka-page-back {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 13px;\n    color: #999;\n    text-decoration: none;\n    margin-bottom: 18px;\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n  }\n  .podborka-page-back:hover { color: #666; }\n  .podborka-page-title {\n    font-size: 26px;\n    font-weight: 600;\n    color: #333;\n    margin: 0 0 6px;\n  }\n  .podborka-page-subtitle {\n    font-size: 13px; color: #999; line-height: 1.5; margin: 0 0 4px;\n  }\n  .podborka-section-label {\n    font-size: 11px; font-weight: 600; color: #b9a988; text-transform: uppercase;\n    letter-spacing: 0.06em; margin: 22px 0 10px; padding-top: 18px;\n    border-top: 1px solid #f0ece0;\n  }\n  .podborka-section-label:first-of-type { border-top: none; padding-top: 0; }\n  .podborka-list-note { font-size: 12px; color: #999; line-height: 1.5; margin-bottom: 10px; }\n  .podborka-list-head {\n    display: flex; justify-content: space-between; padding: 0 0 6px;\n    font-size: 10px; color: #bbb; text-transform: uppercase; letter-spacing: 0.04em;\n  }\n  .podborka-list { margin-bottom: 4px; }\n  .podborka-empty {\n    color: #999; font-size: 14px; padding: 30px 0; text-align: center;\n  }\n  .podborka-empty a { color: #b9a988; font-weight: 600; text-decoration: none; }\n  .podborka-empty a:hover { text-decoration: underline; }\n\n  .podborka-row {\n    display: flex; align-items: center; gap: 16px;\n    padding: 14px 0; border-bottom: 1px solid #eee;\n  }\n  .podborka-row-thumb {\n    width: 140px; height: 140px; flex: 0 0 auto; border-radius: 16px;\n    object-fit: cover; background: #f0ece0;\n  }\n  .podborka-row-thumb-empty { background: linear-gradient(135deg, #f0ece0, #e6dfcc); }\n  .podborka-row-thumb-link { display: block; flex: 0 0 auto; cursor: pointer; }\n  .podborka-row-name { flex: 1 1 auto; font-size: 16px; color: #333; line-height: 1.4; cursor: pointer; }\n  .podborka-row-name:hover, .podborka-row-thumb-link:hover .podborka-row-thumb { opacity: 0.88; }\n  .podborka-row-sku { font-size: 12px; color: #999; margin-top: 4px; }\n  .podborka-row-price {\n    width: 140px; flex: 0 0 auto; font-family: 'Oswald', sans-serif;\n    font-size: 15px; padding: 10px 12px; border: 1px solid #ddd; border-radius: 10px;\n    box-sizing: border-box;\n  }\n  .podborka-row-price-wrap {\n    display: flex; align-items: center; gap: 8px; flex: 0 0 auto;\n  }\n  .podborka-row-price-stack {\n    display: flex; flex-direction: column; align-items: flex-end; gap: 4px;\n  }\n  .podborka-row-site-price {\n    font-size: 11px; color: #b9a988; letter-spacing: 0.02em; white-space: nowrap;\n    font-family: 'Oswald', sans-serif;\n  }\n  .podborka-row-site-price.empty { visibility: hidden; }\n  .podborka-row-remove {\n    flex: 0 0 auto; width: 34px; height: 34px; border: none; background: #f2f2f2;\n    color: #999; border-radius: 50%; font-size: 20px; line-height: 1; cursor: pointer;\n    display: flex; align-items: center; justify-content: center; padding: 0;\n    transition: background 0.2s, color 0.2s, transform 0.15s;\n  }\n  .podborka-row-remove:hover { background: #dbd0b8; color: #262218; transform: scale(1.08); }\n  .podborka-row-remove:active { transform: scale(0.88); }\n  .podborka-row {\n    transition: opacity 0.22s ease, transform 0.22s ease;\n  }\n  .podborka-row-removing { opacity: 0; transform: scale(0.96) translateX(8px); pointer-events: none; }\n  .podborka-row-move {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    flex: 0 0 auto;\n    align-self: center;\n  }\n  .podborka-row-move-btn {\n    width: 22px; height: 22px; border: none; background: #f2f2f2;\n    color: #bbb; border-radius: 50%; font-size: 9px; line-height: 1; cursor: pointer;\n    display: flex; align-items: center; justify-content: center; padding: 0;\n    transition: background 0.2s, color 0.2s, transform 0.15s;\n  }\n  .podborka-row-move-btn:hover:not(:disabled) { background: #dbd0b8; color: #262218; }\n  .podborka-row-move-btn:active:not(:disabled) { transform: scale(0.88); }\n  .podborka-row-move-btn:disabled { opacity: 0.3; cursor: default; }\n\n  .podborka-agent { display: flex; gap: 10px; }\n  .podborka-agent input {\n    flex: 1 1 50%; font-family: 'Oswald', sans-serif; font-size: 14px;\n    padding: 11px 12px; border: 1px solid #ddd; border-radius: 10px; box-sizing: border-box;\n  }\n  .podborka-static-hint { font-size: 12px; color: #999; margin-top: 8px; line-height: 1.5; }\n\n  .podborka-photo-row { display: flex; align-items: center; gap: 14px; margin-top: 12px; }\n  .podborka-photo-row input[type=\"file\"] { display: none; }\n  .podborka-photo-label {\n    display: inline-flex; align-items: center; gap: 6px; background: #f5f5f5;\n    padding: 10px 16px; border-radius: 10px; cursor: pointer; border: 1px dashed #ccc;\n    font-size: 13px; color: #666; font-family: 'Oswald', sans-serif; margin: 0;\n    transition: background 0.2s;\n  }\n  .podborka-photo-label:hover { background: #eee; }\n  .podborka-photo-preview {\n    width: 64px; height: 64px; border-radius: 50%; object-fit: cover;\n    border: 2px solid #dbd0b8; display: none; flex-shrink: 0; background: #f0ece0;\n  }\n  .podborka-photo-remove {\n    background: #f2f2f2; border: none; color: #999; border-radius: 50%;\n    width: 30px; height: 30px; font-size: 20px; line-height: 1; cursor: pointer;\n    display: none; align-items: center; justify-content: center; padding: 0; flex-shrink: 0;\n  }\n  .podborka-photo-remove:hover { background: #e6e6e6; color: #666; }\n\n  .podborka-actions { display: flex; flex-direction: column; gap: 14px; }\n  .podborka-action-hint { font-size: 12px; color: #999; margin-top: 6px; line-height: 1.4; }\n  .podborka-btn {\n    width: 100%; font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 500;\n    padding: 14px 16px; border-radius: 10px; border: 1px solid #555;\n    background: #333; color: #dbd0b8; cursor: pointer; text-align: center;\n    text-transform: uppercase; letter-spacing: 0.02em; box-sizing: border-box;\n  }\n  .podborka-btn:disabled { opacity: 0.6; cursor: default; }\n  .podborka-btn-primary { background: #dbd0b8; color: #333; border-color: #dbd0b8; }\n  .podborka-send-row { display: none; gap: 10px; margin-top: 12px; }\n  .podborka-send-btn {\n    flex: 1 1 0; text-align: center; font-family: 'Oswald', sans-serif; font-size: 13px;\n    padding: 12px 8px; border-radius: 10px; border: 1px solid #dbd0b8; color: #333;\n    text-decoration: none; background: #f7f3ea;\n  }\n  .podborka-hint { display: none; font-size: 12px; color: #999; margin-top: 10px; line-height: 1.5; }\n\n  @media (max-width: 700px) {\n    .podborka-page-wrap { padding: 20px 14px 50px; }\n    .podborka-page-title { font-size: 21px; }\n    .podborka-list-head { display: none; }\n    .podborka-row {\n      display: grid;\n      grid-template-columns: 72px minmax(0, 1fr) 44px;\n      grid-template-areas: \"thumb name  remove\" \"thumb price remove\";\n      gap: 2px 12px; align-items: center; padding: 16px 0;\n    }\n    .podborka-row-thumb { grid-area: thumb; width: 100px; height: 100px; border-radius: 14px; align-self: center; }\n    .podborka-row-thumb-link { grid-area: thumb; }\n    .podborka-row-name {\n      grid-area: name; font-size: 14px; line-height: 1.35; min-width: 0; word-break: break-word;\n      align-self: end; justify-self: end; text-align: right; padding-bottom: 2px;\n    }\n    .podborka-row-sku { font-size: 11px; margin-top: 2px; text-align: right; }\n    .podborka-row-price-wrap {\n      grid-area: price; width: 100%; justify-self: end;\n      align-self: center; display: flex; align-items: center; gap: 8px; margin-top: 2px;\n    }\n    .podborka-row-price-stack {\n      display: flex; flex-direction: column; align-items: flex-end; gap: 2px;\n      max-width: 90px; min-width: 0; flex: 1 1 auto;\n    }\n    .podborka-row-price { width: 100%; font-size: 16px; line-height: 1.2; padding: 9px 6px; border-radius: 10px; text-align: right; box-sizing: border-box; }\n    .podborka-row-site-price { font-size: 10px; text-align: right; padding-right: 2px; }\n    .podborka-row-remove {\n      grid-area: remove; width: 44px; height: 44px; font-size: 22px; background: #f5f5f5; align-self: center;\n      display: flex; align-items: center; justify-content: center; padding: 0;\n    }\n    .podborka-row-move { align-self: center; gap: 5px; }\n    .podborka-row-move-btn { width: 24px; height: 24px; font-size: 10px; }\n    .podborka-agent { flex-direction: column; gap: 8px; }\n    .podborka-agent input { width: 100%; font-size: 16px; padding: 12px 14px; border-radius: 10px; }\n    .podborka-send-row { flex-wrap: wrap; gap: 8px; }\n    .podborka-send-btn { flex: 1 1 calc(50% - 4px); min-width: 0; padding: 13px 6px; font-size: 13px; border-radius: 10px; }\n  }\n\n  @media (max-width: 380px) {\n    .podborka-row { grid-template-columns: 64px minmax(0, 1fr) 40px; gap: 2px 10px; }\n    .podborka-row-thumb { width: 80px; height: 80px; border-radius: 12px; }\n    .podborka-row-price-stack { max-width: 90px; }\n    .podborka-row-remove { width: 40px; height: 40px; font-size: 22px; }\n    .podborka-row-move-btn { width: 22px; height: 22px; font-size: 9px; }\n  }\n";
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);
  var mount = document.getElementById('podborka-mount');
  if (mount) mount.innerHTML = "<div class=\"podborka-page-wrap\" id=\"podborka-page-root\">\n  <a class=\"podborka-page-back\" href=\"https://arrowsrealty.ru/\">← На главную</a>\n  <div class=\"podborka-page-title\">Подборка объектов</div>\n  <div class=\"podborka-page-subtitle\">Здесь собраны объекты, которые вы отметили кнопкой «В подборку» на сайте.</div>\n\n  <div class=\"podborka-section-label\">Объекты в подборке</div>\n  <div class=\"podborka-list-note\">Изначально указана цена с сайта. Контролируйте предложение и указывайте нужную для вас стоимость.</div>\n  <div class=\"podborka-list-note\">Стрелками ↑ ↓ можно менять порядок объектов — в таком же порядке они пойдут в PDF-презентации (что выше в списке — то раньше в файле).</div>\n  <div class=\"podborka-list-head\"><span style=\"margin-left:112px;\">Объект</span><span>Цена, ₽</span></div>\n  <div class=\"podborka-list\" id=\"podborka-list\"></div>\n  <div class=\"podborka-empty\" id=\"podborka-empty\" style=\"display:none;\">\n    Пока пусто — вернитесь на <a href=\"https://arrowsrealty.ru/\">главную</a> и добавьте объекты кнопкой «В подборку».\n  </div>\n\n  <div id=\"podborka-page-below\" style=\"display:none;\">\n    <div class=\"podborka-section-label\">Ваши контакты — попадут в презентации</div>\n    <div class=\"podborka-agent\">\n      <input type=\"text\" id=\"podborka-agent-name\" placeholder=\"Артём\">\n      <input type=\"tel\" id=\"podborka-agent-phone\" placeholder=\"+7 (000) 000-00-00\">\n    </div>\n    <div class=\"podborka-static-hint\" id=\"podborka-agent-hint\">Показываются на обложке и в конце каждой презентации. Поле оставите пустым — сформируется презентация без этих данных.</div>\n    <div class=\"podborka-photo-row\">\n      <label for=\"podborka-agent-photo\" class=\"podborka-photo-label\">📎 Добавить своё фото</label>\n      <input type=\"file\" id=\"podborka-agent-photo\" accept=\"image/*\">\n      <img class=\"podborka-photo-preview\" id=\"podborka-agent-photo-preview\" alt=\"\">\n      <button type=\"button\" class=\"podborka-photo-remove\" id=\"podborka-agent-photo-remove\" aria-label=\"Убрать фото\">&times;</button>\n    </div>\n\n    <div class=\"podborka-section-label\">Что сделать с подборкой</div>\n    <div class=\"podborka-actions\">\n      <div class=\"podborka-action\">\n        <button class=\"podborka-btn podborka-btn-primary\" id=\"podborka-download\" type=\"button\">Скачать все презентации</button>\n        <div class=\"podborka-action-hint\">Один PDF-файл; если объектов больше 10 — несколько файлов подряд</div>\n      </div>\n      <div class=\"podborka-action\">\n        <button class=\"podborka-btn\" id=\"podborka-download-plain\" type=\"button\">Скачать без цены и номера</button>\n        <div class=\"podborka-action-hint\">Та же подборка, но без цены и контактов на обложке — можно переслать как есть</div>\n      </div>\n      <div class=\"podborka-action\">\n        <button class=\"podborka-btn\" id=\"podborka-send-toggle\" type=\"button\">Отправить подборку мне в мессенджер</button>\n        <div class=\"podborka-action-hint\">Откроет чат со мной — согласуем показы и детали по объектам</div>\n      </div>\n    </div>\n    <div class=\"podborka-send-row\" id=\"podborka-send-row\">\n      <a class=\"podborka-send-btn\" id=\"podborka-send-tg\" target=\"_blank\" rel=\"noopener\">Telegram</a>\n      <a class=\"podborka-send-btn\" id=\"podborka-send-max\" target=\"_blank\" rel=\"noopener\">MAX</a>\n      <a class=\"podborka-send-btn\" id=\"podborka-send-wa\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>\n    </div>\n    <div class=\"podborka-hint\" id=\"podborka-hint\">Текст сообщения уже скопирован — если мессенджер откроется пустым, просто вставьте его (Ctrl+V).</div>\n  </div>\n</div>";
})();

(function() {
  console.log('📄 [СТРЕЛЫ: презентации + карта] Запуск V.15.1');

  // ==== ОБЩИЕ НАСТРОЙКИ ====
  const YML_URL = 'https://arrowsrealty.ru/tstore/yml/a950e007bd575604e7517f13082cfeba.yml';
  const DEFAULT_NAME = 'Артём';
  const DEFAULT_PHONE = '+7 (961) 857-17-72';
  const YANDEX_STATIC_MAPS_KEY = '9a645f19-0f48-4d35-b80e-75878a707540'; // отдельный ключ для продукта "Static API"

  const SLIDE_WIDTH_PX = 900;
  const RENDER_SCALE_TEXT = 1.2;   // было 1.4 — заметно уменьшает вес PDF, на текстовых слайдах разница не видна
  const RENDER_SCALE_PHOTO = 1;
  const RENDER_SCALE_MAP = 1.2;
  const JPEG_QUALITY = 0.72;       // было 0.78 — чуть компактнее, для просмотра на экране разница незаметна

  let currentProduct = null;
  let allObjects = [];
  let catalogLoadPromise = null;
  // Блокировка одновременных генераций PDF: даже после того, как видимый
  // 50-секундный таймаут выдал пользователю ошибку, реальная фоновая
  // работа (html2canvas и т.п.) на iPhone может продолжать выполняться
  // и после этого — если разрешить сразу запустить вторую генерацию
  // поверх неё, они начинают конкурировать за canvas/память, и именно
  // это, похоже, приводит к зависаниям на повторных попытках. Пока это
  // не null — новая генерация не стартует.
  const T0 = performance.now();
  function tlog(label) {
    console.log(`⏱ [+${(performance.now() - T0).toFixed(0)}мс] ${label}`);
  }
  window.addEventListener('error', (e) => {
    console.log(`⏱ [+${(performance.now() - T0).toFixed(0)}мс] 🔥 ГЛОБАЛЬНАЯ ОШИБКА НА СТРАНИЦЕ: ${e.message} (${e.filename}:${e.lineno})`);
  });
  tlog('скрипт стартовал (верх файла)');

  function ensureCatalogLoaded() {
    if (!catalogLoadPromise) {
      tlog('ensureCatalogLoaded: старт загрузки каталога (YML)');
      catalogLoadPromise = (async () => {
        allObjects = await loadYML();
        if (allObjects.length) currentProduct = findCurrentProduct(allObjects);
        tlog('ensureCatalogLoaded: каталог загружен и разобран');
      })();
    }
    return catalogLoadPromise;
  }

  // ==== ОБЩИЕ УТИЛИТЫ ====
  function parseCoords(params) {
    let lat = null, lng = null, coordStr = null;
    for (let p of params) {
      let name = p.getAttribute('name') || '';
      let val = p.textContent.trim();
      if (name === 'Широта') lat = parseFloat(val);
      if (name === 'Долгота') lng = parseFloat(val);
      if (name === 'Координаты') coordStr = val;
    }
    if (lat && lng && !isNaN(lat) && !isNaN(lng)) return [lat, lng];
    if (coordStr) {
      let parts = coordStr.split(/[,\s]+/);
      for (let i = 0; i < parts.length - 1; i++) {
        let pl = parseFloat(parts[i].replace(',', '.'));
        let pn = parseFloat(parts[i + 1].replace(',', '.'));
        if (!isNaN(pl) && !isNaN(pn)) return [pl, pn];
      }
    }
    return null;
  }

  // Обрезает текст по первой строке-маркеру (цена/контакты) — используется
  // для презентаций (там цену/телефон Артёма показывать не нужно).
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

  // Описание для балуна на карте — полное, с сохранением формата (там
  // цена не мешает, она и так есть отдельной строкой в балуне).
  function cleanDescriptionForBalloon(raw) {
    if (!raw) return '';
    let t = raw.replace(/<[^>]*>/g, '').replace(/\[CDATA\[/g, '').replace(/\]\]>/g, '');
    t = t.replace(/([➵➳➴📞])/g, '\n$1').replace(/\n{3,}/g, '\n\n');
    t = t.replace(/[જ⁀➴]/g, '');
    t = t.replace(/[ \uFFFD]/g, '');
    t = t.replace(/[^\u0020-\uD7FF\u000A\u000D\uE000-\uFFFD]/g, '');
    return t.trim();
  }

  function formatPrice(p) {
    let n = parseInt(p, 10);
    return isNaN(n) ? '' : n.toLocaleString('ru-RU');
  }

  function escapeHtml(str) {
    return (str || '').toString()
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function sanitizeFilename(str) {
    return (str || '').toString()
      .replace(/[\\/:*?"<>|]/g, '')
      .replace(/\s+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 80) || 'файл';
  }

  function withTimeout(promise, ms, fallbackValue) {
    return new Promise((resolve) => {
      let done = false;
      const timer = setTimeout(() => { if (!done) { done = true; resolve(fallbackValue); } }, ms);
      Promise.resolve(promise).then((v) => {
        if (!done) { done = true; clearTimeout(timer); resolve(v); }
      }, () => {
        if (!done) { done = true; clearTimeout(timer); resolve(fallbackValue); }
      });
    });
  }
  // withTimeoutReject — используется там, где без результата продолжать
  // нельзя (сама генерация целиком, подключение библиотек): при таймауте
  // возвращается отказ (reject) с понятным сообщением об ошибке.
  function withTimeoutReject(promise, ms, message) {
    return new Promise((resolve, reject) => {
      let done = false;
      const timer = setTimeout(() => { if (!done) { done = true; reject(new Error(message || 'Таймаут')); } }, ms);
      Promise.resolve(promise).then((v) => {
        if (!done) { done = true; clearTimeout(timer); resolve(v); }
      }, (e) => {
        if (!done) { done = true; clearTimeout(timer); reject(e); }
      });
    });
  }

  // fetch() с гарантированным пределом ожидания (см. пояснение выше про
  // withTimeout/withTimeoutReject) — используется при скачивании фото.
  async function loadYML() {
    try {
      tlog('loadYML: fetch() отправлен');
      // На мобильной сети fetch() иногда не завершается ни успехом, ни
      // ошибкой — AbortController гарантирует, что мы не будем ждать
      // ответ бесконечно (иначе зависают вообще все кнопки на странице).
      const controller = new AbortController();
      const abortTimer = setTimeout(() => controller.abort(), 15000);
      let resp;
      try {
        resp = await fetch(YML_URL, { signal: controller.signal });
      } finally {
        clearTimeout(abortTimer);
      }
      tlog('loadYML: ответ на fetch получен, читаем текст');
      const xml = await resp.text();
      tlog(`loadYML: текст получен (${xml.length} символов), начинаем DOMParser.parseFromString`);
      const doc = new DOMParser().parseFromString(xml, 'text/xml');
      tlog('loadYML: XML разобран, начинаем перебор offer-ов');
      const offers = doc.querySelectorAll('offer');
      const objects = [];
      for (let off of offers) {
        let name = off.querySelector('name')?.textContent || '';
        let priceRaw = off.querySelector('price')?.textContent || '0';
        let priceNum = parseInt(priceRaw, 10);
        let vendor = '', image = '', url = '#', desc = '';
        let vendorCode = off.querySelector('vendorCode')?.textContent?.trim() || '';
        image = off.querySelector('picture')?.textContent || off.querySelector('image')?.textContent || '';
        url = off.querySelector('url')?.textContent || '#';
        let descElem = off.querySelector('description');
        if (descElem) desc = descElem.innerHTML || descElem.textContent || '';
        let params = Array.from(off.querySelectorAll('param'));
        let paramMap = {};
        for (let p of params) {
          let pn = p.getAttribute('name') || '';
          let pv = p.textContent.trim();
          if (pn === 'vendor' || pn === 'Производитель' || pn === 'Бренд') vendor = pv;
          if (!vendorCode && (pn === 'vendorCode' || pn === 'Артикул')) vendorCode = pv;
          paramMap[pn] = pv;
        }
        let coords = parseCoords(params);
        objects.push({
          id: url.split('/').pop() || `obj_${Math.random()}`,
          name, price: formatPrice(priceNum), priceRaw: priceNum,
          cleanDescription: cleanDescription(desc),
          balloonDescription: cleanDescriptionForBalloon(desc),
          vendor, vendorCode, image, url, coords, params: paramMap,
          pictures: off.querySelectorAll('picture').length > 0
            ? Array.from(off.querySelectorAll('picture')).map(p => p.textContent.trim())
            : [image]
        });
      }
      tlog(`loadYML: перебор offer-ов завершён (${objects.length} шт.)`);
      console.log(`📦 Загружено объектов из YML: ${objects.length}`);
      return objects;
    } catch (e) {
      console.error('❌ Ошибка загрузки YML:', e);
      return [];
    }
  }

  function findCurrentProduct(objects) {
    const currentUrl = window.location.href;
    const found = objects.find(obj => obj.url === currentUrl || currentUrl.includes(obj.url) || obj.url === currentUrl.replace(/\/$/, ''));
    if (found) console.log('✅ Текущий объект найден по URL:', found.name);
    else console.warn('❌ Текущий объект не найден по URL');
    return found;
  }

  /* ============================================================
     МОДУЛЬ 1: КНОПКИ ПРЕЗЕНТАЦИЙ
     ============================================================ */

  // Иконки для кнопок презентаций (слева от надписи)
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPad в режиме "как компьютер"
  }

  // Встроенный браузер Telegram (iOS) — единственный, где та же самая
  // ссылка на blob: в этой же вкладке, судя по отчётам, вообще ничего не
  // делает по клику (в отличие от MAX и обычного Safari, где всё
  // открывается). window.TelegramWebviewProxy — нативный мост, который
  // приложение Telegram подставляет в свой webview; UA-проверка — запасной
  // вариант на случай, если моста нет.
  function isTelegramWebview() {
    return !!window.TelegramWebviewProxy || /\bTelegram\b/i.test(navigator.userAgent || '');
  }

  // ---- СОХРАНЕНИЕ ФАЙЛОВ НА iOS ----
  // Испробовано и отброшено: navigator.share (зависает в вебвью),
  // window.open()/location.href из скрипта с blob: или data:-URI (то же
  // самое зависание либо "ничего не происходит"), ссылка target="_blank"
  // (открытие новой вкладки — на iOS и особенно во встроенных браузерах
  // именно ЭТОТ шаг ненадёжен: новую вкладку блокируют/подвешивают).
  // Самый простой и надёжный из всех вариантов — открыть файл В ТОЙ ЖЕ
  // вкладке, обычной ссылкой без единого JS-вызова в момент клика: браузер
  // просто переходит на blob-ссылку и показывает PDF своим родным
  // просмотрщиком (с кнопкой "Поделиться"/"Сохранить"). Чтобы вернуться к
  // товару и скачать ещё раз — обычная кнопка "Назад", страница
  // восстанавливается из кэша браузера мгновенно, так можно скачивать
  // сколько угодно раз за сеанс.
  function showIOSReadyBanner(blob, label) {
    const old = document.getElementById('ios-ready-overlay');
    if (old) old.remove();
    const url = URL.createObjectURL(blob);

    const overlay = document.createElement('div');
    overlay.id = 'ios-ready-overlay';
    overlay.className = 'ios-ready-overlay';

    const modal = document.createElement('div');
    modal.className = 'ios-ready-modal';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close';
    closeBtn.setAttribute('aria-label', 'Закрыть');
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => overlay.remove();

    // Клик по тёмному фону тоже закрывает — открыть файл можно только по
    // клику на саму кнопку ниже (это важно для iOS: открытие должно
    // происходить по прямому, "живому" клику пользователя на ссылку).
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    const icon = document.createElement('div');
    icon.className = 'ios-ready-icon';
    icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';

    const title = document.createElement('div');
    title.className = 'ios-ready-title';
    title.textContent = label + ' 🎉';

    const sub = document.createElement('div');
    sub.className = 'ios-ready-sub';
    sub.textContent = 'Нажмите кнопку ниже, чтобы открыть файл и сохранить его на устройство';

    const inTelegram = isTelegramWebview();

    // Пробовали показывать PDF встроенным <iframe> прямо в этом попапе,
    // чтобы вообще не переходить никуда — не сработало: во встроенном
    // браузере Telegram iframe с blob:-ссылкой остаётся пустым (сам PDF
    // внутри него не рендерится). А обычная ссылка в той же вкладке (ниже)
    // при этом открывает файл в родном просмотрщике Telegram нормально —
    // так что просто используем её и для Telegram тоже, без спецрежима.
    const openBtn = document.createElement('a');
    openBtn.href = url;
    // ВАЖНО: пробовали target="_blank" отдельно для Telegram (расчёт был
    // на то, что встроенный браузер Telegram иначе реагирует на blob:,
    // чем на обычную ссылку) — не сработало вообще, по клику ничего не
    // появлялось (значит window.open/_blank там просто заблокирован).
    // Оставляем ссылку в той же вкладке для всех — включая Telegram, как
    // и для остальных браузеров: это по-прежнему самый надёжный вариант.
    openBtn.className = 'ios-ready-open-btn';
    openBtn.textContent = 'Открыть и сохранить';
    openBtn.onclick = () => { setTimeout(() => overlay.remove(), 300); };

    modal.appendChild(closeBtn);
    modal.appendChild(icon);
    modal.appendChild(title);
    modal.appendChild(sub);
    modal.appendChild(openBtn);

    if (inTelegram) {
      const tgHint = document.createElement('div');
      tgHint.style.cssText = 'font-size:12px; color:#999; margin-top:14px; line-height:1.5;';
      tgHint.textContent = 'Если ничего не открылось: нажмите ⋯ вверху экрана → «Открыть в браузере» и скачайте презентацию оттуда — встроенный браузер Telegram иногда блокирует такие файлы.';
      modal.appendChild(tgHint);
    }

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }

  let librariesLoaded = false;
  function loadLibraries() {
    if (librariesLoaded) return Promise.resolve();
    const p = new Promise((resolve, reject) => {
      let loaded = 0;
      let failed = false;
      const total = 2;
      function done() { loaded++; if (loaded === total) { librariesLoaded = true; resolve(); } }
      function fail(name) { if (!failed) { failed = true; reject(new Error(`Не удалось загрузить библиотеку ${name}`)); } }
      if (typeof html2canvas !== 'undefined') done();
      else { const s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'; s.onload = done; s.onerror = () => fail('html2canvas'); document.head.appendChild(s); }
      if (typeof jsPDF !== 'undefined' || window.jspdf) done();
      else { const s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'; s.onload = done; s.onerror = () => fail('jsPDF'); document.head.appendChild(s); }
    });
    // Если CDN не ответит вообще никак (ни onload, ни onerror — бывает на
    // нестабильной мобильной сети), не ждём вечно.
    return withTimeoutReject(p, 20000, 'Не удалось загрузить библиотеки для генерации PDF');
  }

  // Таймаут страхует от картинки, которая не вызовет ни onload, ни onerror
  // (редкий, но реальный случай на iOS/мобильной сети) — именно это и
  // приводило к "вечной генерации", зависшей на подготовке фото/карты.
  function preloadImage(url, useCORS = true) {
    if (!url) return Promise.resolve();
    const p = new Promise(resolve => {
      const img = new Image();
      if (useCORS) img.crossOrigin = 'anonymous';
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = url;
    });
    return withTimeout(p, 9000);
  }

  // Как preloadImage, но возвращает true/false — реально ли загрузилась
  // картинка. Нужна для карты: если Яндекс Static Maps не отдал картинку
  // (неверный/просроченный ключ, исчерпана квота, ошибка на их стороне),
  // лучше совсем пропустить слайд с картой, чем показать в PDF пустой
  // прямоугольник с рамкой — как сейчас и происходит.
  function preloadImageOk(url, useCORS = true) {
    if (!url) return Promise.resolve(false);
    const p = new Promise(resolve => {
      const img = new Image();
      if (useCORS) img.crossOrigin = 'anonymous';
      img.onload = () => resolve(true);
      img.onerror = (e) => { console.error('🗺️ Карта: изображение не загрузилось (Яндекс Static Maps вернул ошибку или недоступен). URL:', url); resolve(false); };
      img.src = url;
    });
    return withTimeout(p, 9000, false);
  }

  function waitImages(container) {
    const imgs = Array.from(container.querySelectorAll('img'));
    if (!imgs.length) return Promise.resolve();
    return Promise.race([
      Promise.all(imgs.map(img => new Promise(res => {
        if (img.complete) return res();
        img.onload = () => res();
        img.onerror = () => res();
      }))),
      new Promise(res => setTimeout(res, 4000))
    ]);
  }

  async function renderSlide(doc, html, pageState, opts = {}) {
    const scale = opts.scale || RENDER_SCALE_TEXT;
    const useCORS = opts.useCORS !== false; // по умолчанию true; для карты Яндекса выключаем — она не поддерживает CORS
    const el = document.createElement('div');
    // ВАЖНО: было position:fixed — это известный баг html2canvas на iOS
    // Safari: элемент с position:fixed далеко за пределами экрана иногда
    // заставляет html2canvas зависать навсегда при расчёте координат (сам
    // диагностический вывод подтвердил зависание именно на самом первом,
    // простом текстовом слайде-обложке). position:absolute с тем же
    // смещением даёт тот же визуальный эффект (элемент вне видимой
    // области), но без этого бага.
    el.style.cssText = `position:absolute; left:-9999px; top:0; width:${SLIDE_WIDTH_PX}px; background:#fff; font-family:'Oswald', Arial, sans-serif;`;
    el.innerHTML = html;
    document.body.appendChild(el);
    await waitImages(el);

    let canvas, imgData;
    try {
      canvas = await html2canvas(el, { scale, useCORS, backgroundColor: '#ffffff', logging: false });
      imgData = canvas.toDataURL('image/jpeg', JPEG_QUALITY);
    } catch (e) {
      document.body.removeChild(el);
      if (opts.optional) { console.warn('⚠️ Необязательный слайд пропущен:', e); return false; }
      throw e;
    }
    document.body.removeChild(el);
    el.innerHTML = '';

    const pdfW = 210;
    const pxToMm = pdfW / canvas.width;
    const totalH = canvas.height * pxToMm;
    const pageCount = Math.max(1, Math.ceil(totalH / 297));

    // iOS Safari держит память под canvas даже после удаления его из DOM,
    // пока GC явно не освободит backing store — на большой презентации
    // (много слайдов и фото) это накапливается и на второй-третий раз
    // рендер начинает зависать/падать. Явно обнуляем canvas сразу после
    // того, как выжали из него нужные данные (imgData), чтобы не копить
    // память между генерациями.
    canvas.width = 0;
    canvas.height = 0;
    canvas = null;

    for (let i = 0; i < pageCount; i++) {
      if (pageState.used) doc.addPage();
      pageState.used = true;
      doc.addImage(imgData, 'JPEG', 0, -i * 297, pdfW, totalH);
    }
    return true;
  }

  // Шрифт для векторных PDF-слайдов (обложка/финал/описание) — встроенные
  // шрифты jsPDF (helvetica и т.п.) НЕ содержат кириллицу: при попытке
  // напечатать русский текст ими получается нечитаемая абракадабра.
  // Поэтому встраиваем Oswald (тот же шрифт, что использует сайт) —
  // урезанный только до нужных символов (кириллица/латиница/₽), чтобы не
  // раздувать файл. Статичные начертания получены из присланного
  // переменного файла Oswald-VariableFont_wght.ttf (wght=400 и wght=700).
  const CYRILLIC_FONT_NAME = 'OswaldCyr';
  const CYRILLIC_FONT_REGULAR_B64 = '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AgMAMAIPAD8BlwA/AhcALAHIAB4BhwA/AhcAMAIxAD8A+ABFAS0ABwHvAD8BjQA/ApQAPQIQAD8CGwAwAeAAPwIdADACBwA/AdkAJwGdAA8CHwA4AfkAFwLZACQB4gANAeEADAGhACYBmQAZAosAKgG/ADgBmwArAboAKwGlACsBpQArAcoAHgEfABMBuQAUAb0AOQDlAD0A4AA9AOAAPQDm/+0BrQA4AOUAQAKoADYBtwA2AakALAG+ADYBuwAsAUEAOQF2ABkBNAAWAbgAMgGBAA8CTAAcAYUACQGIAAwBWwAgAh0AEwLgABMDCAATAesAEwIDABMB7AATAe4APwIMAD8BhwA/AYcAPwF5AD8BggA/AZkADgIaAD8CcwALAZcAPwGXAD8BlwA/AqQABAHgABkCIQA/AiEAPwIhAD8COgA/AfwAPwH8AD8CRQACApQAPQIxAD8CGwAwAjwAPwHgAD8CAwAwAZ0ADwHEABMBxAATApYAMAHiAA0CJwAyAm4APwLuAD8DFgA/AiMAPwHuAD8C2AA/AjcABQNEAA4DDgA/AdkAJwH3ADACBwAxAPgARQD4//ABLQAHAnkACgLPAD8CIQANAnoADQH4//YCjwAEAhwAMAJOABcCwQAEAeAAGQINAD8CXgA/Afz/8AJVABUCSQA/AsIAPwNnAD8CwgA8AgMAMAGdAA8B4QAMAd0ADAH5AA0C0QAPAj4AMQIxADICJgA/ArcADwKtAA8A+ABFAqQABAINAD8CXQACAjEAPwJJAD8CJgAxAq4APQHsABMB7AATAnv/zQGXAD8CFwAsAhcALAKkAAQB4AAZAcgAHgIhAD8CIQA/AhsAMAIcADACHAAwAgcAMQHEABMBxAATAcQAEwInADIC2AA/AZkADgH0AA0B4gANAfX/9gHgAD8BmQAZAbYANAGfADYBIgA2ASIANgEoADcBIgA2AUIAFAHJAD8CDgAgAaUAKwGlACsBpQArAkMABAF3AB0ByQA2AckANgHJADYB7QA2AZ8ANgGfADYB5QARAhEAMwHLADYBqQAsAbwANgG+ADYBmwArAVoACwGIAAwBiAAMAl4AKwGFAAkBsQAlAecANgJxADYChwA2Ab4ANgGfADYCbwA2AeD//AKTAAUCdgA2AXYAGQGNACwBnAAqAOUAPQDg/+cA5v/tAcn/+wI9ADYBsAAKAcn/+wGt//YCEgADAagALAGmAA8CVQAEAXcAHQG2ADYB8AA2AcwAEgHgAAsB5QA2AhYANgKlADYCaQAnAZsAKwFaAAsBhAAMAYkADAGnAAkCLgALAcoAJQG7ABIBvQA5AjEAEAITABAA6wBAAkMABAHNADYB/wARAcsANgHlADYBsQAlAi4AMwGZABkBmQAZAosAKgGlACsBpQArAaUAKwJDAAQBdwAdAcoAHgHJADYByQA2AakALAGoACwBqAAsAZwAKgGIAAwBiAAMAYgADAGxACUCbwA2AWAAFAGaAAkBhQAJAcEACgG+ADYCBQA6AXoAHgHeACkB3QAoAeMAKAHcAC8B9wA6AYIAFgHzADIB9gAsALf/YAOxADkDsQBcA2oAOwFUAFABpgBMAaoATgGyAE4A5QAAAOUAAAC8ADEAuwAoAMUAPADXADoCKQAmANAAMgHjADIBjgAtAeYAIAFxAB0BcQAdAS8AKAIvACgEBgAoAVgAAAEqAEkBBAAdASwAKAFBACwBVAA/ATYAGgCyAB4BYgAeAWIAHgFFAB4AsgAeALIAHgHHAB8B4QA5AQoAFAB/ABQDiAA7Al4AOgDvAEUB6wAnAfUAHAGfABkBnwA2AXUAOgF1ABwBvwAjAbsAIgN7ACQAAACnAAD/dAAA/8oAAP94AAD/5AAA/6oAAP98AAD/oAEWADkAAQAABKn+3wAABOz/O/5SBMcAAQAAAAAAAAAAAAAAAAAAAWgABAHQAZAABQAAAooCWAAAAEsCigJYAAABXgAyAVsAAAAAAAAAAAAAAACAAAIDAAAAAgAAAAAAAAAAbmV3dADAACAgvQSp/t8AAAUtAXkAAAAEAAAAAAJCAyoAAAAgAAMAAAACAAAAAwAAABQAAwABAAAAFAAEAtoAAAAyACAABAASAC8AOQBFAFoAaQB6AH4AoACrALsEGgQjBDoEQwRfBGMEawR1BP8gFCAaIB4gJiC9//8AAAAgADAAOgBGAFsAagB7AKAAqwC7BAAEGwQkBDsERARiBGoEcgSKIBMgGCAcICYgvf//AAAA8AAA/8MAAP/CAAAAkwCkAJUAAPw8AAD8iwAAAAAAAAAAAADhLQAAAADhEuCaAAEAMgAAAE4AAABiAAAAfAAAAAAAAAB8AAAArgAAANgBDgEQARIBGAAAAgACBAAAAAAAAAEyATkBUQE8AVYBXgFUAVIBQwFEATsBWAE1AT8BNAE9ATYBNwFbAVkBWgE6AVMAAQADAAQABQAGAUcBPgFIAV0BQgFnAB4AIAAhACIAIwAmACcAKAApAUUBVQFGAVwATQBOAHYARgBuAG0AcABxAHIAawBsAHMAVgBTAGAAZwBCAEMARABFAEsATABPAFAAUQBSAFUAYQBiAGQAYwBlAGYAagBpAGgAbwB0AHUAsQCyALMAtAC6ALsAvgC/AMAAwQDEANAA0QDTANIA1ADVANkA2ADXAN4A4wDkALwAvQDlALUA3QDcAN8A4ADhANoA2wDiAMUAwgDPANYAdwDmAHgA5wB5AOgAegDpAFQAwwCvAR4AsAEfAEcAtgBJALgASgC5AHsA6gB8AOsAfQDsAH4A7QB/AO4AgADvAIEA8ACCAPEAgwDyAIQA8wCFAPQAhgD1AIcA9gCIAPcAiQD4AIoA+QCLAPoAjAD7AI0A/ACOAP0AjwD+AJAAkQEAAJIBAQCTAQIAlAEDAJUBBACWAQUAlwEGAP8AmAEHAJkBCACaAQkAmwEKAJwBCwCdAQwAngENAJ8BDgCgAQ8AoQEQAKIBEQCjARIApAETAKUBFACmARUApwEWAKgBFwCpARgAqgEZAEgAtwCrARoArAEbAK0BHACuAR0BTQFOAUkBSwFMAUoAAAAAAAkAcgADAAEECQAAAKoAAAADAAEECQABAAwAqgADAAEECQACAA4AtgADAAEECQADADIAxAADAAEECQAEABwA9gADAAEECQAFAFYBEgADAAEECQAGABwBaAADAAEECQEAAAwBhAADAAEECQEDAA4AtgBDAG8AcAB5AHIAaQBnAGgAdAAgADIAMAAxADYAIABUAGgAZQAgAE8AcwB3AGEAbABkACAAUAByAG8AagBlAGMAdAAgAEEAdQB0AGgAbwByAHMAIAAoAGgAdAB0AHAAcwA6AC8ALwBnAGkAdABoAHUAYgAuAGMAbwBtAC8AZwBvAG8AZwBsAGUAZgBvAG4AdABzAC8ATwBzAHcAYQBsAGQARgBvAG4AdAApAE8AcwB3AGEAbABkAFIAZQBnAHUAbABhAHIANAAuADEAMAAzADsAbgBlAHcAdAA7AE8AcwB3AGEAbABkAC0AUgBlAGcAdQBsAGEAcgBPAHMAdwBhAGwAZAAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADQALgAxADAAMwA7AGcAZgB0AG8AbwBsAHMAWwAwAC4AOQAuADMAMwAuAGQAZQB2ADgAKwBnADAAMgA5AGUAMQA5AGYAXQBPAHMAdwBhAGwAZAAtAFIAZQBnAHUAbABhAHIAVwBlAGkAZwBoAHQAAAADAAAAAAAA/5wAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAwAAAEkAAAAAgAuAAEAAQABAAMABgABAAkAHgABACAAIwABACYAKQABACsAKwABAC0APAABAD0AQQACAEIAQgABAEQARgABAEwAVgABAFgAWgABAFwAYAABAGIAYwABAGkAaQABAG0AbQABAG8AcQABAHkAeQABAHsAewABAH4AfwABAIYAiQABAIsAjAABAI4AkgABAJQAlAABAJYAqwABAK4ArgABALAAsQABALQAtQABALcAtwABALsAxQABAMkAyQABAMsAzAABAM4AzwABANEA0gABANgA2AABANwA3AABAN4A4AABAOgA6AABAOoA6gABAO0A7QABAPgA+AABAPoA/gABAQABAQABAQcBGgABAR0BHQABAR8BHwABAA4ABQAYACAALgA8AEQAAgABAD0AQQAAAAEABAABAQ4AAgAGAAoAAQD1AAEB6wACAAYACgABAQMAAQIFAAEABAABAPYAAQAEAAEBAgABAAAACgAkADIAAkRGTFQADmxhdG4ADgAEAAAAAP//AAEAAAABa2VybgAIAAAAAQAAAAEABAACAAgAAgAKDE4AAQEkAAQAAACNAkICWAJiAuACaAJuAnQCggKwAuACtgLgAvIC/AMOAygDLgO8A9YEUAR2BLIEgASOBJQFRASeBKwFVgVWBKwErASyBLIEwATGBNAE2gTgBOYFAAUOBTQFPgVEBVYFVgVcBZIFmAcyBzIHMggQCBAIEAXSCBYF4AZCBnQGxgbwBwIIFgcgCBYIFggQCBAIEAgQCBAHMgcyB0QHogggCBAHwAfAB8oIFggQCBYIFggWCBYIIAgyCFAIdgiECJYInAimCLwI/gk8CeAJ4AlGCVQJagl8CaIJogngCawJzgngCeAJ4AnmClQKCAoOChgKHgo8CkIKVAuQC5AKWgpaCmgKggrwC0oLkAuQC7IMCAuyDAgL2AvmDAgMCAwiAAEAjQABAAMABAAF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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAAP/BAAD/6QAAAAAAAAAA//n//QAAAAAAAAAA//MAAAAAAAAAAAAA/8QAAAAAAAAAAP/9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/0QAAAAAAAAAAAAAAAP/H/+IAAP/zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//0AAP/2AAAAAAAAAAD/+QAAAAAAAP/7//kAAAAAAAAAAAAAAAD/+QAAAAD//QAAAAAAAAAAAAAAAAAA//v/7wAAAAAAAAAAAAAAAP/fAAD//AAAAAAAAAAA/7oAAAAA//YAAP/s/+MAAAAAAAAAAAAAAAD/9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/zAAAAAAAAAAD//QAAAAAAAAAAAAAAAAAAAAAAAAAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+7/+QAA//wAAAAAAAD/xP/5AAD/uv/YAAD/1P/RAAAAAP/lAAD/4v/GAAD//f/RAAAAAAAAAAAAAP/dAAD/vgAA/+UAAAAAAAAAAP/s//3/0f/XAAAAAAAAAAAAAAAAAAAAAAAA//sAAAAAAAAAAAAA//8AAAAAAAAAAP/2AAX/9QAAAAAAAAAA/9sAAAADAAAAA//5AAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAD/5QAA//0AAAAAAAAAAP/NAAAAAP/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//QAAAAAAAAAAAAAAAD/8v/2AAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//QAAAAAAAAAAAAAAAP/9AAAAAAAA//kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xgAAAAAAAAAAAAAAAP/D//MAAP/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAA/8EAAP/5AAAAAAAAAAAAAAAAAAAAAAAAAAD/+AAAAAAAAAAAAAD/ygAAAAAAAAAA//0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/BAAAAAAAAAAAAAAAA/+3/+gAAAAD/8//iAAAAAAAAAAAAAAAA/98AAAAA/+IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAA//kAAAAAAAAAAP/9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAD/wQAAAAAAAAAA/8EAAAAAAAAAAAAAAAAAAAAAAAD/y/+/AAAAAP+5AAD/zgAAAAD/wQAA/8cAAP/9AAD/6f+///MAAAAA//f//QAA//YAAP/+AAAAAAAAAAAAAP/x//0AAAAA//4AAAAA//IAAAAA//v/+QAAAAAAAP/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/B//0AAP+//9cAAP/Q/8cAAAAA/98AAP/E/78AAAAA/78AAAAAAAD/7wAA/8EAAP/LAAD/y//zAAAAAAAA/+n/+P/B/8cAAAAAAAAAAAAAAAAAAAAAAAD//f/9AAD//QAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAP/WAAAAAAAAAAAAAAAA/9D/7wAA//4AAAAA//8AAAAA//0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/6f/5AAD/8//BAAAAAAAAAAD/6QAAAAAAAP/fAAAAAP/zAAAAAAAAAAAAAAAAAAAAAP/zAAAAAP/BAAAAAP/fAAAAAAAAAAAAAP/5AAD/3//zAAAAAAAA//0AAAAA//f/5AAAAAAAAAAAAAAAAP/vAAD/+gAAAAAAAAAA/8sAAAAAAAAAAP/s/7cAAAAAAAAAAAAAAAD/9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9gAA//0AAP/+AAAAAP/l//MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+T//wAA/9r/5QAAAAD/8wAAAAD//QAAAAD/6QAA//7/8gAAAAAAAAAAAAD/9QAA/9sAAP/4AAAAAAAAAAAAAAAA//b/9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/6//MAAAAAAAAAAAAAAAD/3wAA//0AAAAAAAAAAP/BAAAAAP/2AAD/+f/tAAAAAAAAAAAAAAAA/+IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//f/6AAAAAAAA//cAAAAAAAAAAP/z/6f/0f/9AAD//f/9AAD/sv+Q//b/z//fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9//n/+f/9AAAAAP/5AAAAAAAA//kAAP++//YAAP/wAAAAAP/L/8sAAP/2/9v/+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/77/+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAeAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/7AAAAAD/9f/9AAD/9gAA//cAAP/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8AAAAAD/9wAAAAAAAAAAAAD//QAAAAAAAAAAAAAAAAAAAAAAAAAA//oAAAAAAAAAAAAAAAAAAAAAAAAAAP/lAAD//QAAAAD//QAA/9//+QAA//0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/6QAA//EAAAAAAAAAAP/5AAAAAAAA////6wAAAAAAAAAAAAAAAP/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8cAAP/iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/0QAAAAAAAAAAAAAAAAAA//P/7gAA//sAAP////4AAAAAAAAAAAAA/+X//AAA//n//AAAAAAAAP/5AAD/8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/5AAAAAAAAAAD//QAAAAAAAAAA//0AAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/5AAAAAP/XAAD/wQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9j/+//9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2AAAAAAAAAAD/4gAAAAAAAAAAAAAAAAAAAAAAAAAA//YAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//n/+gAA/+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//0AAAAA/8YAAP/lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/uwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sAAAAAAAAAAAAAAAAAAP/QAAD/7wAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9YAAAAAAAAAAP/9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/zAAAAAAAAAAAAAAAAAAD/zgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAA//kAAAAAAAAAAAAAAAD/6f/xAAD//gAAAAD/+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//IAAAAA/+3/2wAAAAAAAAAAAAAAAAAA//X/+AAA//7/8AAAAAD//QAAAAAAAAAA/8EAAP/zAAAAAAAAAAD/4gAA//MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//QAAAAAAAP/7AAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/7AAAAAD/5//TAAAAAP/5AAAAAAAAAAAAAP/vAAD//f/2AAAAAAAAAAAAAAAA/+X/dgAA//kAAAAAAAAAAP/rAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/VAAAAAAAAAAAAAP/B/8EAAAAA//YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP92/+cAAAAA/9P/9gAAAAAAAAAAAAAAAAAAAAD//f/r//YAAAAAAAAAAAAA//0AAAAAAAAAAAAAAAD/xAAAAAAAAAAA/90AAAAAAAAAAAAAAAAAAAAAAAD/vv+6AAAAAP/YAAD/2AAAAAD/0QAA/9cAAP/5//3/7P/RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/dAAAAAAAAAAAAAAAA/87/+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//3//QAAAAAAAAAAAAAAAP/9AAD/+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/DAAD/8wAAAAAAAAAAAAAAAAAAAAAAAP/2AAAAAAAAAAAAAAAA/8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACADUAAQABAAAAAwAGAAEACQAKAAUADQAQAAcAEgAYAAsAGgAaABIAHAAeABMAIAAjABYAJgAoABoALQA5AB0AOwA9ACoAPwA/AC0AQQBCAC4ARABHADAATABTADQAVQBeADwAYgBjAEYAZQBlAEgAZwBnAEkAaQBpAEoAbQByAEsAdAB1AFEAeQB5AFMAewCAAFQAggCCAFoAhQCJAFsAjACMAGAAkACRAGEAkwCTAGMAlQCZAGQAnACfAGkAoQCmAG0AqgCrAHMArQCtAHUAsACyAHYAuwC9AHkAyQDJAHwAywDMAH0AzgDRAH8A3ADeAIMA4gDjAIYA5QDlAIgA6ADoAIkA9AD0AIoA9gD2AIsA+AD4AIwA/AD/AI0BBwEMAJEBEgEYAJcBHAEcAJ4BNAE3AJ8BSQFOAKMBUQFSAKkAAQABAVIAAgAAADIAFgAAAAgAAAAAADMAEQAAAAAAIAAqACMANAAAAAAANQAAABgAEgAZAAYAAAAhAAAADgAaAAMAAAABABsAJQAFAAAAAAAmAA8ACgAAAAAAAAAAACcAHAAKAAoAAQABADkAHgATAB8ABwAMACIAAAAMABAAJgAAABwAAAAcAC0AAAAoABcAFwAXAAAAAAAAAAAAKwArACsADQAoAAQABAAEAAAADQANAAQABAAEAAsABAA3ACwAFwAAAAAAAAAuAAQAAAAEAAAABAAAAAQAAAAAAAAAOgAsAAsABAAEADsAAAALAAQAAAAAAAAACwAAAA0AKAANAA0ADQANAAAAFwAAAAAALAAXADgAOAAuAAAAAAAEAAAAAAAAAAQADQAAAAQAAAAEAAQABAAtAC0AAAAAAAsACwANACgAAAAEAAQACwALAAsACwAAAAAAAAAEAAQAAAAuAAAAAAA3AC8ACQAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAJADAAAAAVABUACQAxAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAwAAkAAAAAAAAAKQAJAAAAKQAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAABUAAAAxAAAAAAAAACkAFAAUAD0AAAAAAAAAAAAAAAAAAAAvAC8AFAAUAAkACQAAAAAAAAAAAAAACQAJAAkACQAVABUAFQAAAAAAAAAxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQANgA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAHQAdAB0AHQAAAAAAHQAdAAIAaQABAAEABgADAAMAAQAEAAQAAwAFAAYAAQAJAAkAAQAKAAoAAwALAAwAAQANAA0AIQAOAA8AAQAQABAAIgARABEAAQASABIAAwATABMAAQAUABQAAwAVABUAAQAWABYAEQAXABcAFAAYABgABwAaABoAFwAcABwADQAdAB0AGQAeAB4ABQAhACMAAgAmACYADAAnACcADwApACkACgArACsACgAsACwAHQAvADAACQAxADEAAgAyADIAJAAzADMAAgA0ADQACQA1ADUAEgA2ADYAFgA3ADcACAA5ADkAGAA7ADsADgA8ADwAHAA9AEEADABCAEIAHgBDAEcABABKAEoABABMAE4ABABRAFMABABVAFYABABYAFkABABbAFwABABeAF4AEwBiAGIAHwBkAGkABABqAGoAEwBsAGwABABtAG0AKABwAHEABAByAHIAKQBzAHMAEwB0AHQABAB2AHYAEwB9AH8ABACAAIAAEwCBAIMABACGAIYAEwCHAIgAJgCJAIkAHwCKAIoAEwCNAI0ABACQAJAABACSAJIABACUAJUABACXAJcABACYAJkAHgCbAJsABACcAJ0AJwChAKIABACrAKsABACtAK0AHwCwALAABACxALEAGwC7AL0ACwDJAMkACwDLAMsAJQDMAMwACwDOAM8AEADQANAACwDRANEAIADcANwAKgDdAN0ACwDhAOEAKwDoAOgACwDpAOkAEADzAPQACwD2APYAEAD4APgAIAEHAQkAGwEKAQoACwESARQACwEWARgAEAEcARwAIAEfAR8AJQE0ATUAGgE2ATcAIwFJAUoAGgFLAU4AFQFRAVIAFQAAAAEAAAAKAHYAtgACREZMVAAObGF0bgASAEQAAAA0AAhBWkUgAExDQVQgAEBDUlQgAExLQVogAExNT0wgAEBST00gAEBUQVQgAExUUksgAEwAAP//AAMAAQACAAMAAP//AAMAAAACAAMAAP//AAQAAAACAAMABAAFY2NtcAAgY2NtcAAmZnJhYwAubGlnYQA0bG9jbAA6AAAAAQAAAAAAAgAAAAAAAAABAAIAAAABAAMAAAABAAEABAAKADAARACAAAIACAABAAgAAQAKAAIAEgAYAAEAAgBAAEEAAgAmACkAAgAmAC4AAQAAAAEACAABAAYAAgABAAEAKQAEAAAAAQAIAAEALAACAAoAIAACAAYADgEsAAMBPQEkASsAAwE9ASIAAQAEAS0AAwE9ASQAAQACASEBIwAEAAgAAQAIAAEANgABAAgABQAMABQAHAAiACgAPgADACYAKQA/AAMAJgAuAD0AAgAmAEAAAgApAEEAAgAuAAEAAQAmAAAAAQABAAgAAQAAABQAAQAAABwAAndnaHQBAAAAAAIAAwAAAAIBAwGQAAACvAAAAAA=';
  const CYRILLIC_FONT_BOLD_B64 = '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LT4tUi1qLXcthAAAAAEAAAAEGl44PPe0Xw889QADA+gAAAAA1eqgZQAAAADm1unX/yH+mwVuBSYAAAAGAAIAAAAAAAACmwBSAicAFQLE//MCTAA8AjMAMQJKADwBvwA8AkYALQH3ABcBsgA8AkYAMQJiAD8BLQA9AV0ADQI3ADwBuwA8AsAAOQIxADwCSgAxAjsAPAJKADECWAA8AgIAKgG9AAsCTAA2Ag4AFgK5ABsCAwAHAe0ACAGxAB0BzAAUAqYAJAH6ADMB1AAnAfcAKgHWACcB1gAmAeUAFgFAABEB9gAZAf0ANAEJADMBGAA7ARgAOwEN/+8B/gAzARIAOgLxADMB+wAzAeMAJwH5ADMB+AAqAX8ANQGoABQBXwAOAfgALQGlAAoCVQAVAboACwHAAAMBiAAjAmAAEQMjAAoDWgARAicADgInAAoCJwAVAioAPwJMADwB0AA/AdAAPwHNAD8BzwA/AfYAGgJcAD8CtQASAb8APAG/ADwBvwA8AxsABgIOACICTgA/Ak4APwJOAD8CZgA/AjwAPwI8AD8CkAAHAsAAOQJiAD8CSgAxAl0APAI7ADwCMwAxAb0ACwIqABYCKgAWAvcALgIDAAcCYQAtAqUAQQM5AD8DeABFAlcAPAIsAD8DPwA/AngADQN4AAoDQwA/AgIAKgIpADECPwAyARUANgEV/90BRQAEAqEABQM5AD8CXgAKAp8ACAJMAAYC9wAGAkoAMQJOABYDTAAGAg4AIgJYADwCvQA/AkQAAAKEAAwCjQA/Av8APwONAD8DOQAzAjMAMQG9AAsB7QAIAfYADwIkAAcDBAALAn8ALAJ/ACICXgA8AycAFwMlABcBLQA9AxsABgJYAD8CrAAHAmIAPwJ/AD8CYQAsAuAAOQInABUCJwAVAsT/8wG/ADwCRgAtAkYALQMbAAYCDgAiAfcAFwJOAD8CTgA/AkoAMQJKADECSgAxAj8AMgIqABYCKgAWAioAFgJhAC0DPwA/AfcAGgITAAcCAwAHAkwABgI7ADwBzAAUAeMALQH5ADMBYAAzAWAAMwFhADMBYAAzAXsACAH+ADgCZgAnAdYAJwHWACcB1gAnApQABwHCACQB/AAzAfwAMwH8ADMCLQAzAgEAMwIBADMCNwANAkYANAINADMB4wAnAf8AMwH5ADMB1AAnAZUAEAHAAAMBwAAD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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+AAAAAAAAAAAAAAAAP/4AAAAAAAA/+8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/yAAAAAAAAAAAAAAAAP/P/94AAP/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8sAAP/+AAAAAAAAAAAAAAAAAAAAAAAAAAD/9QAAAAAAAAAAAAD/xAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/LAAAAAAAAAAAAAAAA/+z/8wAAAAD/7v/qAAAAAAAAAAAAAAAA/9oAAAAA/+IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAAAA/+8AAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//oAAAAAAAAAAAAAAAD/ywAAAAAAAAAA/8sAAAAAAAAAAAAAAAAAAAAAAAD/xv+6AAAAAP+1AAD/1gAAAAD/vAAA/8wAAP/4AAD/5P/D//0AAAAA/+z/+AAA//YAAP/6AAAAAAAAAAAAAP/p//gAAAAA//wAAAAA//UAAAAA//3//gAAAAAAAP/vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/L//gAAP+6/9MAAP/W/8wAAAAA/+kAAP/T/8gAAAAA/8MAAAAAAAD/9AAA/8sAAP/GAAD/1f/9AAAAAAAA/+T/+v+8/8wAAAAAAAAAAAAAAAAAAAAAAAD/+P/4AAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/QAAAAAAAAAAAAAAAA/9b/1QAA//wAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAfAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1P/vAAD/7v+8AAAAAAAAAAD/1AAAAAAAAP/KAAAAAP/eAAAAAAAAAAAAAAAAAAAAAP/uAAAAAP+8AAAAAP/aAAAAAAAAAAAAAP/vAAD/2v/eAAAAAAAA//8AAAAA/+//5AAAAAAAAAAAAAAAAP/lAAD/9wAAAAAAAAAA/9UAAAAAAAAAAP/s/6IAAAAAAAAAAAAAAAD/5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/5gAA//gAAP/6AAAAAP/6/94AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAA/+r/7AAAAAD/7gAAAAD/+AAAAAD/5AAA//z/+gAAAAAAAAAAAAD//gAA/9kAAP/+AAAAAAAAAAAAAAAA/+b/9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/z/+4AAAAAAAAAAAAAAAD/2gAA//gAAAAAAAAAAP/LAAAAAP/+AAD/7//sAAAAAAAAAAAAAAAA/+IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////zAAAAAAAA/+4AAAAAAAAAAP/u/6z/x///AAD/+P//AAD/u/+Q/+b/0//hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4//7/7//4AAAAAP/vAAAAAAAA//4AAP/K/+YAAP/tAAAAAP/G/8YAAP/m/9n/7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8r/7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAuAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAD/9P/4AAAAAgAAAAMAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//AAAAAAAAwAAAAAAAAAAAAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAAAAAAAAAAAAAAAAAAP/bAAD/+AAAAAD/+AAA/9r/7wAA//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/7AAA/9kAAAAAAAAAAP/vAAAAAAAA//7/7AAAAAAAAAAAAAAAAP/lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8wAAP/SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xwAAAAAAAAAAAAAAAAAA//H/6QAAAAIAAAAA//UAAAAAAAAAAAAA/9v//wAA/+3//wAAAAAAAP/vAAD/5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/vAAAAAAAAAAD/+AAAAAAAAAAA//gAAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+AAAAAP/TAAD/vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9T/8//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2AAAAAAAAAAD/4gAAAAAAAAAAAAAAAAAAAAAAAAAA//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+//8QAA//QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAAA/8wAAP/bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/WAAD/1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9AAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAD/1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+AAAAAAAAAAAAAAAA/+UAAAAAAAAAAAAAAAD/7P/ZAAD/+wAAAAD/7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//UAAAAA/+z/3wAAAAAAAAAAAAAAAAAA//7//gAA//r/8wAAAAD/+AAAAAAAAAAA/64AAP/uAAAAAAAAAAD/6gAA/+4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+AAAAAAAAP/zAAAAAP/6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/6gAAAAD/2//QAAAAAP/+AAAAAAAAAAAAAP/lAAD/+P/mAAAAAAAAAAAAAAAA//r/agAA/+8AAAAAAAAAAP/iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/QAAAAAAAAAAAAAP+8/7wAAAAA/+YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9q/9sAAAAA/9D/7//4AAAAAAAAAAAAAAAAAAD/+P/i/+YAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAD/xAAAAAAAAAAA/9kAAAAAAAAAAAAAAAAAAAAAAAD/s//BAAAAAP/UAAD/2AAAAAD/xwAA/9MAAP/v//j/+//NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/ZAAAAAAAAAAAAAAAA/87/7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AMsAJQDMAMwACwDOAM8AEADQANAACwDRANEAIADcANwAKgDdAN0ACwDhAOEAKwDoAOgACwDpAOkAEADzAPQACwD2APYAEAD4APgAIAEHAQkAGwEKAQoACwESARQACwEWARgAEAEcARwAIAEfAR8AJQE0ATUAGgE2ATcAIwFJAUoAGgFLAU4AFQFRAVIAFQAAAAEAAAAKAHYAtgACREZMVAAObGF0bgASAEQAAAA0AAhBWkUgAExDQVQgAEBDUlQgAExLQVogAExNT0wgAEBST00gAEBUQVQgAExUUksgAEwAAP//AAMAAQACAAMAAP//AAMAAAACAAMAAP//AAQAAAACAAMABAAFY2NtcAAgY2NtcAAmZnJhYwAubGlnYQA0bG9jbAA6AAAAAQAAAAAAAgAAAAAAAAABAAIAAAABAAMAAAABAAEABAAKADAARACAAAIACAABAAgAAQAKAAIAEgAYAAEAAgBAAEEAAgAmACkAAgAmAC4AAQAAAAEACAABAAYAAgABAAEAKQAEAAAAAQAIAAEALAACAAoAIAACAAYADgEsAAMBPQEkASsAAwE9ASIAAQAEAS0AAwE9ASQAAQACASEBIwAEAAgAAQAIAAEANgABAAgABQAMABQAHAAiACgAPgADACYAKQA/AAMAJgAuAD0AAgAmAEAAAgApAEEAAgAuAAEAAQAmAAAAAQABAAgAAQAAABQAAQAAABwAAndnaHQBAAAAAAIAAQAAAAABBgK8AAAAAA==';
  function ensureCyrillicFont(doc) {
    // addFileToVFS/addFont нужно вызывать на каждом новом экземпляре jsPDF
    // (doc создаётся заново на каждую генерацию), поэтому регистрируем
    // шрифт один раз для конкретного doc, а не глобально.
    doc.addFileToVFS(CYRILLIC_FONT_NAME + '-Regular.ttf', CYRILLIC_FONT_REGULAR_B64);
    doc.addFont(CYRILLIC_FONT_NAME + '-Regular.ttf', CYRILLIC_FONT_NAME, 'normal');
    doc.addFileToVFS(CYRILLIC_FONT_NAME + '-Bold.ttf', CYRILLIC_FONT_BOLD_B64);
    doc.addFont(CYRILLIC_FONT_NAME + '-Bold.ttf', CYRILLIC_FONT_NAME, 'bold');
  }

  // Слайд-обложка, финальный слайд с контактом и слайд описания —
  // рисуются НАПРЯМУЮ через jsPDF (текстом и векторной графикой), БЕЗ
  // html2canvas. Именно эти слайды (особенно с добавленной своей
  // фотографией, и особенно во встроенных браузерах мессенджеров типа
  // Telegram/MAX) стабильно вызывали "вечную генерацию" — судя по всему,
  // html2canvas в принципе ненадёжен в таких браузерах, а не какая-то
  // одна конкретная деталь на странице. Векторный рендер полностью
  // убирает html2canvas из них: он не делает "скриншот" HTML, а печатает
  // текст и картинки напрямую в PDF, поэтому зависнуть на этом ему уже
  // не на чем.

  // Рамка + уголки-засечки — тот же лёгкий декор, что и на HTML-слайдах
  // (см. slideChrome), только нарисован напрямую линиями jsPDF. Общая для
  // всех векторных слайдов (обложка/финал/описание).
  function drawSlideFrame(doc) {
    const pageW = 210, pageH = 297;
    // Нижнее поле рамки больше верхнего/боковых — иначе рамка почти
    // вплотную подходит к номеру страницы ("p / total"), который печатается
    // отдельно в самом конце (y=292мм) и на некоторых экранах визуально
    // сливается с нижней линией рамки.
    const mTop = 6, mSide = 6, mBottom = 14;
    doc.setDrawColor(231, 221, 199);
    doc.setLineWidth(0.35);
    doc.rect(mSide, mTop, pageW - mSide * 2, pageH - mTop - mBottom);
    const cornerLen = 7;
    doc.line(mSide + 4, mTop + 4, mSide + 4 + cornerLen, mTop + 4);
    doc.line(mSide + 4, mTop + 4, mSide + 4, mTop + 4 + cornerLen);
    doc.line(pageW - mSide - 4, pageH - mBottom - 4, pageW - mSide - 4 - cornerLen, pageH - mBottom - 4);
    doc.line(pageW - mSide - 4, pageH - mBottom - 4, pageW - mSide - 4, pageH - mBottom - 4 - cornerLen);
  }

  function renderContactSlideVector(doc, pageState, opts) {
    const { title, sku, price, showContact, name, phone, circlePhotoDataUrl, closingNote } = opts;
    if (pageState.used) doc.addPage();
    pageState.used = true;

    const pageW = 210, pageH = 297, cx = pageW / 2;
    drawSlideFrame(doc);

    let y = showContact ? 90 : 128;

    if (showContact) {
      const r = 17; // радиус кружка с фото, мм
      doc.setDrawColor(219, 208, 184);
      doc.setLineWidth(1.4);
      if (circlePhotoDataUrl) {
        try {
          doc.addImage(circlePhotoDataUrl, 'PNG', cx - r, y - r, r * 2, r * 2);
        } catch (e) {
          console.warn('⚠️ Не удалось вставить фото в кружок:', e);
        }
      }
      doc.circle(cx, y, r, 'S');
      y += r + 15;

      doc.setFont(CYRILLIC_FONT_NAME, 'bold');
      doc.setFontSize(19);
      doc.setTextColor(51, 51, 51);
      doc.text(name || '', cx, y, { align: 'center' });
      y += 9;

      doc.setFont(CYRILLIC_FONT_NAME, 'normal');
      doc.setFontSize(13);
      doc.setTextColor(102, 102, 102);
      doc.text(phone || '', cx, y, { align: 'center' });
      y += 16;
    }

    if (closingNote) {
      // Финальный слайд: имя/телефон уже выведены выше, дальше — только
      // приглашающая фраза, без заголовка объекта.
      doc.setFont(CYRILLIC_FONT_NAME, 'normal');
      doc.setFontSize(11);
      doc.setTextColor(153, 153, 153);
      doc.text(closingNote, cx, y + 6, { align: 'center' });
      return;
    }

    doc.setDrawColor(219, 208, 184);
    doc.setLineWidth(0.6);
    doc.line(cx - 15, y, cx + 15, y);
    y += 14;

    doc.setFont(CYRILLIC_FONT_NAME, 'bold');
    doc.setFontSize(27);
    doc.setTextColor(34, 34, 34);
    const titleLines = doc.splitTextToSize(title || '', 150);
    doc.text(titleLines, cx, y, { align: 'center' });
    y += titleLines.length * 11 + 4;

    if (sku) {
      doc.setFont(CYRILLIC_FONT_NAME, 'normal');
      doc.setFontSize(11);
      doc.setTextColor(136, 136, 136);
      doc.text(`АРТИКУЛ ${sku}`, cx, y, { align: 'center' });
      y += 10;
    }
    if (price) {
      doc.setFont(CYRILLIC_FONT_NAME, 'bold');
      doc.setFontSize(17);
      doc.setTextColor(51, 51, 51);
      doc.text(`Цена: ${price} ₽`, cx, y, { align: 'center' });
      y += 12;
    }

    doc.setDrawColor(219, 208, 184);
    doc.setLineWidth(0.6);
    doc.line(cx - 20, y, cx + 20, y);
  }

  // Загружает фото по URL и готовит квадратную (cover-кроп по центру)
  // JPEG-картинку для слайда описания — обычным canvas, БЕЗ html2canvas.
  // Обёрнуто таймаутом: если картинка вдруг не загрузится за разумное
  // время, слайд описания всё равно должен появиться, просто без фото.
  function loadSquarePhotoDataUrl(url, size) {
    const p = new Promise((resolve) => {
      if (!url) return resolve(null);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const srcSize = Math.min(img.naturalWidth, img.naturalHeight);
          const sx = (img.naturalWidth - srcSize) / 2;
          const sy = (img.naturalHeight - srcSize) / 2;
          const canvas = document.createElement('canvas');
          canvas.width = size; canvas.height = size;
          canvas.getContext('2d').drawImage(img, sx, sy, srcSize, srcSize, 0, 0, size, size);
          const dataUrl = canvas.toDataURL('image/jpeg', JPEG_QUALITY);
          canvas.width = 0; canvas.height = 0;
          img.src = '';
          resolve(dataUrl);
        } catch (e) {
          console.warn('⚠️ Не удалось подготовить фото для слайда описания:', url, e);
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = url;
    });
    return withTimeout(p, 9000, null);
  }

  // Слайд "Описание" — тоже напрямую через jsPDF, без html2canvas (см.
  // комментарий у renderContactSlideVector: html2canvas в принципе
  // ненадёжен в узких мобильных браузерах, особенно во встроенных
  // браузерах мессенджеров типа Telegram/MAX, где именно на этом слайде
  // и фиксировались зависания). Длинный текст аккуратно обрезается
  // многоточием, чтобы гарантированно уместиться на одной странице —
  // презентация, которая точно откроется, важнее идеальной вёрстки.
  function renderDescriptionSlideVector(doc, pageState, opts) {
    const { sku, description, extraLines, extraDescText, photoDataUrl } = opts;
    if (pageState.used) doc.addPage();
    pageState.used = true;
    drawSlideFrame(doc);

    const pageW = 210, marginX = 16, bottomLimit = 275;
    const photoSize = photoDataUrl ? 74 : 0;
    const colX = marginX + 6;
    const colW = photoDataUrl ? (pageW - marginX * 2 - 12 - photoSize - 6) : (pageW - marginX * 2 - 12);

    if (photoDataUrl) {
      const px = pageW - marginX - 6 - photoSize, py = 24;
      doc.setDrawColor(51, 51, 51);
      doc.setLineWidth(0.5);
      doc.addImage(photoDataUrl, 'JPEG', px, py, photoSize, photoSize);
      doc.rect(px, py, photoSize, photoSize);
    }

    let y = 30;
    doc.setDrawColor(219, 208, 184);
    doc.setLineWidth(0.5);
    doc.setFont(CYRILLIC_FONT_NAME, 'bold');
    doc.setFontSize(15);
    doc.setTextColor(51, 51, 51);
    doc.text('Описание', colX, y);
    y += 3;
    doc.line(colX, y, colX + colW, y);
    y += 7;

    doc.setFont(CYRILLIC_FONT_NAME, 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(153, 153, 153);
    doc.text(`АРТИКУЛ ${sku || '—'}`, colX, y);
    y += 8;

    // Печатаем текст построчно и сами следим за нижней границей — если
    // текст длиннее, чем помещается, аккуратно обрезаем с многоточием,
    // вместо того чтобы вылезать за край страницы.
    function printWrapped(text, fontSize, lineGap, color, bold) {
      if (!text) return;
      doc.setFont(CYRILLIC_FONT_NAME, bold ? 'bold' : 'normal');
      doc.setFontSize(fontSize);
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, colW);
      for (let i = 0; i < lines.length; i++) {
        if (y > bottomLimit) return;
        const remainingSpace = bottomLimit - y;
        if (remainingSpace < lineGap && i < lines.length - 1) {
          // последняя строка, которая ещё помещается, — обрезаем с "…"
          let line = lines[i];
          while (line.length > 1 && doc.getTextWidth(line + '…') > colW) {
            line = line.slice(0, -1);
          }
          doc.text(line + '…', colX, y);
          y += lineGap;
          return;
        }
        doc.text(lines[i], colX, y);
        y += lineGap;
      }
    }

    printWrapped(description, 11, 5.2, [68, 68, 68], false);
    y += 3;

    if (extraLines.length && y < bottomLimit) {
      doc.setFont(CYRILLIC_FONT_NAME, 'bold');
      doc.setFontSize(12);
      doc.setTextColor(51, 51, 51);
      doc.text('Характеристики', colX, y);
      y += 6;
      printWrapped(extraLines.join('\n'), 10, 4.6, [102, 102, 102], false);
    }

    if (extraDescText) {
      // Блок "О ЖК/районе" — на этой же странице, если хватает места, иначе
      // на отдельной новой странице (не пытаемся втиснуть его силой).
      // Размер шрифта тут ставим заранее — splitTextToSize должен считать
      // ширину строк тем же размером, каким текст реально напечатается.
      doc.setFont(CYRILLIC_FONT_NAME, 'normal');
      doc.setFontSize(10.5);
      const boxLines = doc.splitTextToSize(extraDescText, pageW - marginX * 2 - 20);
      const neededH = 18 + Math.min(boxLines.length, 8) * 5;
      if (y + neededH > bottomLimit) {
        doc.addPage();
        drawSlideFrame(doc);
        y = 26;
      } else {
        y += 8;
      }
      const boxY = y, boxX = marginX + 4, boxW = pageW - marginX * 2 - 8;
      doc.setFillColor(250, 248, 243);
      doc.setDrawColor(219, 208, 184);
      doc.rect(boxX, boxY, boxW, neededH, 'FD');
      doc.setFont(CYRILLIC_FONT_NAME, 'bold');
      doc.setFontSize(10);
      doc.setTextColor(166, 138, 84);
      doc.text('О РАЙОНЕ / ЖК', boxX + 8, boxY + 8);
      doc.setFont(CYRILLIC_FONT_NAME, 'normal');
      doc.setFontSize(10.5);
      doc.setTextColor(68, 68, 68);
      doc.text(boxLines.slice(0, 8), boxX + 8, boxY + 15);
    }
  }

  // Быстрая вставка фото напрямую в PDF, БЕЗ html2canvas (для страниц, где
  // нет ничего, кроме самого фото, — это заметно быстрее, чем рендерить
  // через скриншот HTML-страницы, и не теряет в качестве, т.к. мы сами
  // управляем разрешением при сжатии).
  function addPhotoPageFast(doc, url, pageState) {
    const p = new Promise((resolve) => {
      if (!url) return resolve(false);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const maxDim = 1400; // было 1600 — заметно уменьшает вес PDF на телефонах с большим числом фото
          const s = Math.min(1, maxDim / Math.max(img.naturalWidth, img.naturalHeight));
          const cw = Math.max(1, Math.round(img.naturalWidth * s));
          const ch = Math.max(1, Math.round(img.naturalHeight * s));
          const canvas = document.createElement('canvas');
          canvas.width = cw; canvas.height = ch;
          canvas.getContext('2d').drawImage(img, 0, 0, cw, ch);
          const dataUrl = canvas.toDataURL('image/jpeg', JPEG_QUALITY);
          // Освобождаем canvas и декодированную картинку сразу же — иначе
          // на iOS Safari память от предыдущих фото не успевает
          // освобождаться и презентация с большим числом фото зависает
          // (первая генерация проходит, вторая — уже нет).
          canvas.width = 0;
          canvas.height = 0;
          img.src = '';

          const pdfW = 210, pdfH = 297, margin = 20;
          const boxW = pdfW - margin * 2, boxH = pdfH - margin * 2;
          const aspect = cw / ch;
          let drawW = boxW, drawH = boxW / aspect;
          if (drawH > boxH) { drawH = boxH; drawW = boxH * aspect; }
          const x = margin + (boxW - drawW) / 2;
          const y = margin + (boxH - drawH) / 2;

          if (pageState.used) doc.addPage();
          pageState.used = true;
          doc.addImage(dataUrl, 'JPEG', x, y, drawW, drawH);
          // Та же тонкая рамка, что и на остальных слайдах — это просто
          // векторные линии (не картинка), поэтому на вес файла она
          // практически не влияет, даже при 20-30 фото.
          drawSlideFrame(doc);
          resolve(true);
        } catch (e) {
          console.warn('⚠️ Быстрая вставка фото не удалась, использую запасной способ:', url, e);
          img.src = '';
          resolve(false);
        }
      };
      img.onerror = () => resolve(false);
      img.src = url;
    });
    // Если картинка не вызовет ни onload, ни onerror — не ждём вечно,
    // считаем вставку неудачной и переходим к запасному способу.
    return withTimeout(p, 9000, false);
  }

  async function addPhotoPage(doc, url, pageState) {
    const ok = await addPhotoPageFast(doc, url, pageState);
    if (!ok) {
      const photoHtml = slideChrome(`<div style="width:100%; height:1085px; box-sizing:border-box; padding:40px; display:flex; align-items:center; justify-content:center;">
          <img src="${url}" style="max-width:100%; max-height:100%; object-fit:contain;">
        </div>`);
      await renderSlide(doc, photoHtml, pageState, { scale: RENDER_SCALE_PHOTO });
    }
  }

  // Единое премиальное оформление страницы: тонкая рамка + уголки-засечки
  // в цвет сайта — сдержанная деталь, которая держит стиль на всех
  // страницах презентации, не перегружая её.
  function slideChrome(innerHtml) {
    return `<div style="position:relative; width:100%; min-height:1100px; box-sizing:border-box; border:1px solid #e7ddc7;">
        <div style="position:absolute; top:16px; left:16px; width:22px; height:22px; border-top:2px solid #dbd0b8; border-left:2px solid #dbd0b8;"></div>
        <div style="position:absolute; bottom:16px; right:16px; width:22px; height:22px; border-bottom:2px solid #dbd0b8; border-right:2px solid #dbd0b8;"></div>
        ${innerHtml}
      </div>`;
  }

  function buildMapSlideHtml(coords, addressLine) {
    if (!coords) return null;
    const [lat, lng] = coords;
    const url = `https://static-maps.yandex.ru/v1?ll=${lng},${lat}&size=600,450&z=16&l=map&pt=${lng},${lat},pm2rdl&apikey=${YANDEX_STATIC_MAPS_KEY}`;
    const coordsText = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    const html = slideChrome(`
      <div style="width:100%; min-height:1100px; box-sizing:border-box; padding:60px; display:flex; flex-direction:column; align-items:center; justify-content:center;">
        <div style="font-size:24px; font-weight:600; color:#333; margin-bottom:28px;">Расположение объекта</div>
        <img src="${url}" style="width:100%; max-width:950px; border:2px solid #333; border-radius:4px;">
        <div style="margin-top:22px; text-align:center;">
          ${addressLine ? `<div style="font-size:16px; color:#444; margin-bottom:4px;">${escapeHtml(addressLine)}</div>` : ''}
          <div style="font-size:13px; color:#999;">Координаты: ${coordsText}</div>
        </div>
      </div>`);
    return { html, url };
  }

  // ---- СБОРКА СЛАЙДОВ ОДНОГО ОБЪЕКТА (переиспользуется и для одиночной
  // презентации, и для общего PDF по подборке — см. window.ArrowsPDF ниже
  // и файл модуля подборки) ----
  // opts:
  //   useLive            — брать описание/фото с живой страницы товара
  //                         (только когда obj === currentProduct на его же
  //                         странице); иначе — данные из YML.
  //   showContact        — показывать имя/телефон/цену на обложке
  //   name, phone, price — контактные данные и цена для этого объекта
  //   circlePhotoDataUrl — фото агента в кружке (см. openPopup)
  //   onStage(text)       — коллбэк для диагностики этапа генерации
  async function buildObjectSlides(doc, obj, pageState, opts = {}) {
    const onStage = opts.onStage || function () {};
    const useLive = !!opts.useLive && obj === currentProduct;

    const title = obj.name || 'Объект';
    const sku = obj.vendorCode || '';

    onStage('получение описания объекта');
    const liveDesc = useLive ? await getLiveDescription() : '';
    const description = liveDesc || obj.cleanDescription || '';
    const pictures = useLive ? getCurrentPictures() : (obj.pictures || []).filter(Boolean);
    const params = obj.params || {};

    const extraDescKey = Object.keys(params).find(k => /^(о\s*жк|о\s*районе|доп\.?\s*описание)/i.test((k || '').trim()));
    const extraDescText = extraDescKey ? params[extraDescKey] : '';

    const addressLine = [params['Район'], params['Адрес'], params['Улица']].filter(Boolean).join(', ');

    const skipKeys = ['vendor', 'vendorCode', 'Артикул', 'Широта', 'Долгота', 'Координаты'];
    if (extraDescKey) skipKeys.push(extraDescKey);
    const extraLines = Object.keys(params)
      .filter(k => k && params[k] && !skipKeys.includes(k))
      .map(k => `${k}: ${params[k]}`);

    const showContact = !!opts.showContact;
    const name = showContact ? (opts.name || DEFAULT_NAME) : '';
    const phone = showContact ? (opts.phone || DEFAULT_PHONE) : '';
    const price = showContact ? (opts.price || obj.price || '') : '';
    const circlePhoto = showContact ? (opts.circlePhotoDataUrl || '') : '';

    onStage(`предзагрузка фото (${pictures.length} шт.)`);
    await Promise.all(pictures.map(preloadImage));

    // СЛАЙД: ОБЛОЖКА
    onStage('рендер слайда-обложки');
    renderContactSlideVector(doc, pageState, {
      title, sku, price, showContact, name, phone,
      circlePhotoDataUrl: circlePhoto || null,
    });

    // СЛАЙД: ОПИСАНИЕ + ХАРАКТЕРИСТИКИ + ПЕРВОЕ ФОТО
    onStage('загрузка фото для слайда описания');
    const descPhotoDataUrl = pictures.length ? await loadSquarePhotoDataUrl(pictures[0], 700) : null;

    onStage('рендер слайда с описанием');
    renderDescriptionSlideVector(doc, pageState, {
      sku, description, extraLines, extraDescText,
      photoDataUrl: descPhotoDataUrl,
    });

    // СЛАЙД: КАРТА (статичная, если есть координаты)
    const mapSlide = buildMapSlideHtml(obj.coords, addressLine);
    if (mapSlide) {
      onStage('загрузка изображения карты');
      const mapImageOk = await preloadImageOk(mapSlide.url);
      if (mapImageOk) {
        onStage('рендер слайда с картой');
        await renderSlide(doc, mapSlide.html, pageState, { scale: RENDER_SCALE_MAP, optional: true });
      } else {
        console.warn('🗺️ Слайд с картой пропущен: изображение недоступно.');
      }
    }

    // ФОТО — КАЖДОЕ НА СВОЕЙ СТРАНИЦЕ
    for (let i = 0; i < pictures.length; i++) {
      onStage(`фото ${i + 1} из ${pictures.length}`);
      await addPhotoPage(doc, pictures[i], pageState);
    }
  }

  /* ============================================================
     ПУБЛИЧНЫЙ API ДЛЯ МОДУЛЯ ПОДБОРКИ (podborka.js) — общий PDF по
     нескольким объектам переиспользует ровно те же функции сборки
     слайдов, что и одиночная презентация выше, чтобы не дублировать
     логику и не расходиться с ней при последующих правках.
     ============================================================ */
  window.ArrowsPDF = {
    ensureCatalogLoaded,
    getAllObjects: () => allObjects,
    getCurrentProduct: () => currentProduct,
    loadLibraries,
    ensureCyrillicFont,
    buildObjectSlides,
    renderContactSlideVector,
    isIOS,
    isTelegramWebview,
    showIOSReadyBanner,
    sanitizeFilename,
    withTimeoutReject,
    DEFAULT_NAME,
    DEFAULT_PHONE,
  };

})();


(function () {
  const STORAGE_KEY = 'arrows_podborka_v1';
  const SEND_LINKS = {
    telegram: 'https://t.me/ArtemRielty',
    max: 'https://max.ru/u/f9LHodD0cOLMLNnY1ubTDhHHWJf6c5SEHy4MFFDpDTLiP-if3HImFtthI-o',
    whatsappPhone: '79618571772',
  };
  const MAX_OBJECTS_PER_FILE = 10;

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
    t = t.replace(/�/g, '');
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
        let vendorCode = off.querySelector('vendorCode')?.textContent?.trim() || '';
        for (const p of paramsArr) {
          const pn = p.getAttribute('name') || '';
          const pv = p.textContent.trim();
          if (!vendorCode && (pn === 'vendorCode' || pn === 'Артикул')) vendorCode = pv;
        }

        let descRaw = '';
        const descElem = off.querySelector('description');
        if (descElem) {
          try { descRaw = descElem.innerHTML || ''; } catch (e) {}
          if (!descRaw) { try { descRaw = descElem.textContent || ''; } catch (e) {} }
          descRaw = descRaw.replace(/^\s*<!\[CDATA\[/i, '').replace(/\]\]>\s*$/i, '');
        }
        const cleanDesc = cleanDescription(descRaw);
        const coords = parseCoords(paramsArr);
        const pictureTags = off.querySelectorAll('picture');
        const pictures = pictureTags.length > 0
          ? Array.from(pictureTags).map(p => p.textContent.trim())
          : (image ? [image] : []);

        objects.push({
          name, url, vendorCode, image,
          priceRaw: isNaN(priceRaw) ? '' : priceRaw,
          price: isNaN(priceRaw) ? '' : priceRaw.toLocaleString('ru-RU'),
          cleanDescription: cleanDesc,
          coords, pictures,
        });
      });
      return objects;
    } catch (e) {
      console.warn('⚠️ Подборка: не удалось загрузить список объектов:', e);
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

  function renderList() {
    const listEl = document.getElementById('podborka-list');
    if (!listEl) return;
    const emptyEl = document.getElementById('podborka-empty');
    const belowEl = document.getElementById('podborka-page-below');
    const state = loadState();
    if (!state.items.length) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
      if (belowEl) belowEl.style.display = 'none';
      refreshSendLinks();
      return;
    }
    if (emptyEl) emptyEl.style.display = 'none';
    if (belowEl) belowEl.style.display = 'block';
    const allObjects = getObjectsForList();
    listEl.innerHTML = state.items.map((item, idx) => {
      const obj = allObjects.find(o => normalizeUrl(o.url) === item.id);
      const title = obj ? escapeHtmlLocal(obj.name) : 'Загрузка…';
      const skuLine = obj && obj.vendorCode ? `<div class="podborka-row-sku">Арт. ${escapeHtmlLocal(obj.vendorCode)}</div>` : '';
      const priceVal = (item.price !== '' && item.price != null) ? item.price : (obj ? (obj.priceRaw || '') : '');
      const sitePriceRaw = obj ? (obj.priceRaw || '') : '';
      const sitePriceText = sitePriceRaw ? `на сайте: ${Number(sitePriceRaw).toLocaleString('ru-RU')} ₽` : '';
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
        <div class="podborka-row-price-wrap">
          <div class="podborka-row-move">
            <button class="podborka-row-move-btn podborka-row-move-up" data-idx="${idx}" type="button" aria-label="Переместить выше"${idx === 0 ? ' disabled' : ''}>&#9650;</button>
            <button class="podborka-row-move-btn podborka-row-move-down" data-idx="${idx}" type="button" aria-label="Переместить ниже"${idx === state.items.length - 1 ? ' disabled' : ''}>&#9660;</button>
          </div>
          <div class="podborka-row-price-stack">
            <input type="text" inputmode="numeric" class="podborka-row-price" data-idx="${idx}" placeholder="Цена, ₽" value="${escapeHtmlLocal(String(priceVal))}">
            <span class="podborka-row-site-price${sitePriceText ? '' : ' empty'}">${escapeHtmlLocal(sitePriceText) || '&nbsp;'}</span>
          </div>
        </div>
        <button class="podborka-row-remove" data-idx="${idx}" type="button" aria-label="Убрать">&times;</button>
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

  function syncIfNotEditing() {
    const active = document.activeElement;
    if (active && active.classList && active.classList.contains('podborka-row-price')) return;
    renderList();
  }

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

  async function downloadAllPresentations(withContact) {
    const a = api();
    if (!a) {
      alert('Движок презентаций ещё не загрузился, подождите пару секунд и попробуйте снова.');
      return;
    }
    const state = loadState();
    if (!state.items.length) { alert('Подборка пуста.'); return; }

    const nameFilled = !!(state.agent.name && state.agent.name.trim());
    const phoneFilled = !!(state.agent.phone && state.agent.phone.trim());
    const hasContacts = nameFilled || phoneFilled;
    const effectiveWithContact = withContact && hasContacts;

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
        if (!mine && !theirs) return null;
        const merged = Object.assign({}, theirs || {}, mine || {});
        merged.cleanDescription = (mine && mine.cleanDescription) || (theirs && theirs.cleanDescription) || '';
        merged.pictures = ((mine && mine.pictures && mine.pictures.length) ? mine.pictures : (theirs && theirs.pictures) || []);
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
            showContact: useContact, name, phone,
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
    } catch (e) {
      console.error('❌ Ошибка сборки подборки:', e);
      alert('Не удалось собрать подборку.\nОшибка: ' + (e && (e.message || e.name) ? (e.message || e.name) : String(e)));
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = original; }
    }
  }

  function renderAll() {
    syncIfNotEditing();
  }

  function initInteractions() {
    const nameInput = document.getElementById('podborka-agent-name');
    const phoneInput = document.getElementById('podborka-agent-phone');
    const state0 = loadState();
    if (nameInput) {
      nameInput.value = state0.agent.name || '';
      nameInput.oninput = () => { const s = loadState(); s.agent.name = nameInput.value; saveState(s); };
    }
    if (phoneInput) {
      phoneInput.value = state0.agent.phone || '';
      phoneInput.oninput = () => { const s = loadState(); s.agent.phone = phoneInput.value; saveState(s); };
    }

    const downloadBtn = document.getElementById('podborka-download');
    const downloadPlainBtn = document.getElementById('podborka-download-plain');
    if (downloadBtn) downloadBtn.onclick = () => downloadAllPresentations(true);
    if (downloadPlainBtn) downloadPlainBtn.onclick = () => downloadAllPresentations(false);

    const sendToggle = document.getElementById('podborka-send-toggle');
    if (sendToggle) {
      sendToggle.onclick = () => {
        const row = document.getElementById('podborka-send-row');
        const hint = document.getElementById('podborka-hint');
        const show = row.style.display !== 'flex';
        row.style.display = show ? 'flex' : 'none';
        hint.style.display = show ? 'block' : 'none';
        if (show) refreshSendLinks();
      };
    }

    const photoInput = document.getElementById('podborka-agent-photo');
    const photoPreview = document.getElementById('podborka-agent-photo-preview');
    const photoRemove = document.getElementById('podborka-agent-photo-remove');
    function renderPhotoPreview(dataUrl) {
      if (!photoPreview || !photoRemove) return;
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
    renderPhotoPreview(state0.agent.photo || '');

    function cropPhotoToCircle(source) {
      const size = 400;
      const iw = source.naturalWidth || source.width;
      const ih = source.naturalHeight || source.height;
      const srcSize = Math.min(iw, ih);
      const sx = (iw - srcSize) / 2;
      const sy = (ih - srcSize) / 2;
      const canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(source, sx, sy, srcSize, srcSize, 0, 0, size, size);
      ctx.restore();
      const dataUrl = canvas.toDataURL('image/png');
      canvas.width = 0; canvas.height = 0;
      return dataUrl;
    }

    if (photoInput) {
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
        img.onerror = () => { URL.revokeObjectURL(objUrl); photoInput.value = ''; };
        img.src = objUrl;
      };
    }
    if (photoRemove) {
      photoRemove.onclick = () => {
        const s = loadState();
        s.agent.photo = '';
        saveState(s);
        renderPhotoPreview('');
      };
    }
  }

  function boot() {
    initInteractions();
    renderList();
    ensureAnyCatalog().then(renderList);
    setInterval(renderAll, 1500);
  }

  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot);
})();
