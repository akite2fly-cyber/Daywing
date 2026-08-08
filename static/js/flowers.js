/** Decorative flowers for Daywing — richer botanical SVGs. */
(function () {
  let uid = 0;
  function nextId(prefix) {
    uid += 1;
    return `${prefix}-${uid}-${Date.now().toString(36)}`;
  }

  function daisy(c1, c2, center) {
    const id = nextId("daisy");
    const petals = Array.from({ length: 16 }, (_, i) => {
      const deg = (i * 360) / 16;
      return `
        <g transform="rotate(${deg})">
          <path d="M0 -8 C3.2 -18 4.8 -26 0 -30 C-4.8 -26 -3.2 -18 0 -8 Z"
            fill="url(#${id}-petal)" opacity="${0.82 + (i % 2) * 0.08}"/>
          <path d="M0 -10 C1.2 -18 1.5 -24 0 -28 C-1.5 -24 -1.2 -18 0 -10 Z"
            fill="#ffffff" opacity="0.22"/>
        </g>`;
    }).join("");

    return `
      <svg viewBox="0 0 72 72" class="flower-svg" aria-hidden="true">
        <defs>
          <linearGradient id="${id}-petal" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="${c2}"/>
            <stop offset="55%" stop-color="${c1}"/>
            <stop offset="100%" stop-color="#fffaf4"/>
          </linearGradient>
          <radialGradient id="${id}-disc" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fff3a8"/>
            <stop offset="45%" stop-color="${center}"/>
            <stop offset="100%" stop-color="#d4a017"/>
          </radialGradient>
          <filter id="${id}-soft" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="1.2" stdDeviation="1.1" flood-color="#3d2914" flood-opacity="0.18"/>
          </filter>
        </defs>
        <g transform="translate(36 38)" filter="url(#${id}-soft)">
          ${petals}
          <circle r="8.5" fill="url(#${id}-disc)"/>
          <circle r="6.2" fill="none" stroke="#c4891a" stroke-width="0.6" opacity="0.45"/>
          ${Array.from({ length: 12 }, (_, i) => {
            const a = (i * Math.PI * 2) / 12;
            const x = Math.cos(a) * 3.8;
            const y = Math.sin(a) * 3.8;
            return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="0.7" fill="#a87412" opacity="0.55"/>`;
          }).join("")}
        </g>
      </svg>`;
  }

  function tulip(c1, c2) {
    const id = nextId("tulip");
    return `
      <svg viewBox="0 0 72 72" class="flower-svg" aria-hidden="true">
        <defs>
          <linearGradient id="${id}-stem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#3f7a52"/>
            <stop offset="50%" stop-color="#6fad7f"/>
            <stop offset="100%" stop-color="#3f7a52"/>
          </linearGradient>
          <linearGradient id="${id}-bloom" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="55%" stop-color="${c2}"/>
            <stop offset="100%" stop-color="#fff5f0"/>
          </linearGradient>
          <linearGradient id="${id}-leaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#8fcaa0"/>
            <stop offset="100%" stop-color="#3f7a52"/>
          </linearGradient>
        </defs>
        <path d="M36 66 V30" stroke="url(#${id}-stem)" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        <path d="M36 50 C22 45 16 36 18 27 C26 34 32 36 36 34" fill="url(#${id}-leaf)" opacity="0.95"/>
        <path d="M24 34 C22 22 26 12 36 8 C46 12 50 22 48 34 C44 42 28 42 24 34 Z"
          fill="url(#${id}-bloom)"/>
        <path d="M28 33 C28 20 33 12 36 10 C38 14 40 24 42 33 C38 36 32 36 28 33 Z"
          fill="#ffffff" opacity="0.22"/>
        <path d="M30 34 C31 18 36 11 36 11 C37 18 39 28 41 34"
          fill="none" stroke="${c1}" stroke-width="1.1" opacity="0.35"/>
        <path d="M26 20 C30 16 34 15 36 14" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.35"/>
      </svg>`;
  }

  function blossom(c1, c2, center) {
    const id = nextId("blossom");
    const petals = Array.from({ length: 5 }, (_, i) => {
      const deg = i * 72;
      return `
        <g transform="rotate(${deg})">
          <path d="M0 -2 C6 -8 9 -16 4 -22 C0 -26 -4 -22 -4 -16 C-7 -10 -4 -4 0 -2 Z"
            fill="url(#${id}-petal)"/>
          <path d="M0 -6 C3 -11 4 -17 1 -21 C-1 -17 -2 -11 0 -6 Z"
            fill="#ffffff" opacity="0.28"/>
        </g>`;
    }).join("");

    return `
      <svg viewBox="0 0 72 72" class="flower-svg" aria-hidden="true">
        <defs>
          <radialGradient id="${id}-petal" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#fff7fb"/>
            <stop offset="45%" stop-color="${c2}"/>
            <stop offset="100%" stop-color="${c1}"/>
          </radialGradient>
          <radialGradient id="${id}-heart" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fff4b0"/>
            <stop offset="70%" stop-color="${center}"/>
            <stop offset="100%" stop-color="#c2788a"/>
          </radialGradient>
        </defs>
        <g transform="translate(36 36)">
          ${petals}
          <circle r="5.5" fill="url(#${id}-heart)"/>
          <circle r="2.4" fill="#7a3b4a" opacity="0.35"/>
          ${Array.from({ length: 6 }, (_, i) => {
            const a = (i * Math.PI * 2) / 6;
            return `<circle cx="${(Math.cos(a) * 2.2).toFixed(1)}" cy="${(Math.sin(a) * 2.2).toFixed(1)}" r="0.55" fill="#5c2d38" opacity="0.5"/>`;
          }).join("")}
        </g>
      </svg>`;
  }

  function wild(c1, c2) {
    const id = nextId("wild");
    function bloom(cx, cy, scale, colorA, colorB) {
      return `
        <g transform="translate(${cx} ${cy}) scale(${scale})">
          ${[0, 60, 120, 180, 240, 300]
            .map(
              (deg) =>
                `<path d="M0 0 C3 -6 4 -11 0 -14 C-4 -11 -3 -6 0 0 Z" fill="${colorA}" transform="rotate(${deg})" opacity="0.92"/>`
            )
            .join("")}
          <circle r="3.2" fill="${colorB}"/>
          <circle r="1.4" fill="#fff6c8" opacity="0.75"/>
        </g>`;
    }

    return `
      <svg viewBox="0 0 72 72" class="flower-svg" aria-hidden="true">
        <defs>
          <linearGradient id="${id}-stem" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#6fad7f"/>
            <stop offset="100%" stop-color="#3f7a52"/>
          </linearGradient>
        </defs>
        <path d="M34 66 C33 50 30 40 24 28" stroke="url(#${id}-stem)" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M34 66 C36 52 40 42 48 32" stroke="url(#${id}-stem)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <path d="M34 66 C35 54 38 48 42 40" stroke="url(#${id}-stem)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <path d="M28 48 C18 43 14 36 12 30 C20 36 26 40 30 42" fill="#5f9a6e" opacity="0.88"/>
        ${bloom(24, 24, 1, c1, "#f0d264")}
        ${bloom(48, 28, 0.85, c2, "#ffe08a")}
        ${bloom(40, 16, 0.7, c1, "#f6d56a")}
      </svg>`;
  }

  function rose(c1, c2) {
    const id = nextId("rose");
    return `
      <svg viewBox="0 0 72 72" class="flower-svg" aria-hidden="true">
        <defs>
          <radialGradient id="${id}-outer" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="${c2}"/>
            <stop offset="70%" stop-color="${c1}"/>
            <stop offset="100%" stop-color="#8a3048"/>
          </radialGradient>
          <radialGradient id="${id}-inner" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fff0f4"/>
            <stop offset="55%" stop-color="${c2}"/>
            <stop offset="100%" stop-color="${c1}"/>
          </radialGradient>
          <linearGradient id="${id}-stem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#3f7a52"/>
            <stop offset="50%" stop-color="#79b589"/>
            <stop offset="100%" stop-color="#3f7a52"/>
          </linearGradient>
        </defs>
        <path d="M36 66 V38" stroke="url(#${id}-stem)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M36 52 C24 47 17 39 20 31 C28 38 32 40 36 38" fill="#5f9a6e"/>
        <g transform="translate(36 28)">
          <path d="M0 -16 C10 -14 16 -6 14 2 C18 0 20 8 12 14 C8 18 -8 18 -12 14 C-20 8 -18 0 -14 2 C-16 -6 -10 -14 0 -16 Z"
            fill="url(#${id}-outer)" opacity="0.95"/>
          <path d="M0 -10 C7 -9 11 -3 9 3 C12 2 13 8 7 11 C4 14 -4 14 -7 11 C-13 8 -12 2 -9 3 C-11 -3 -7 -9 0 -10 Z"
            fill="url(#${id}-inner)"/>
          <path d="M0 -4 C3 -3 4 0 3 3 C4 2 4 5 1 6 C0 7 -2 6 -3 4 C-4 2 -3 -1 0 -4 Z"
            fill="#7a2f45" opacity="0.55"/>
          <path d="M-6 -6 C-1 -10 4 -8 6 -3" fill="none" stroke="#ffffff" stroke-width="1.1" opacity="0.28"/>
        </g>
      </svg>`;
  }

  const FLOWERS = { daisy, tulip, blossom, wild, rose };

  const PALETTES = [
    { c1: "#e891b0", c2: "#f7c4d8", center: "#efc453" },
    { c1: "#d4583b", c2: "#f0a06a", center: "#f2d266" },
    { c1: "#b66dff", c2: "#e2b8ff", center: "#ffe9a8" },
    { c1: "#4fae7b", c2: "#9fd9b4", center: "#ffe29a" },
    { c1: "#2eb5d4", c2: "#9fe0ef", center: "#ffe9a0" },
    { c1: "#e85d6a", c2: "#ffb4a8", center: "#ffe7b0" },
  ];

  const TYPES = Object.keys(FLOWERS);

  function pick(list, i) {
    return list[((i % list.length) + list.length) % list.length];
  }

  function renderFlower(type, palette, extraClass = "") {
    const draw = FLOWERS[type] || FLOWERS.daisy;
    const wrap = document.createElement("span");
    wrap.className = `deco-flower ${extraClass}`.trim();
    wrap.innerHTML = draw(palette.c1, palette.c2, palette.center);
    return wrap;
  }

  function clear(el) {
    if (el) el.innerHTML = "";
  }

  function decoratePage() {
    const host = document.getElementById("page-flowers");
    if (!host) return;
    clear(host);
    const month = new Date().getMonth();
    const placements = [
      { type: pick(TYPES, month), cls: "deco-flower--tl", pal: pick(PALETTES, month) },
      { type: pick(TYPES, month + 2), cls: "deco-flower--tr", pal: pick(PALETTES, month + 2) },
      { type: pick(TYPES, month + 4), cls: "deco-flower--br", pal: pick(PALETTES, month + 4) },
    ];
    for (const item of placements) {
      host.appendChild(renderFlower(item.type, item.pal, item.cls));
    }
  }

  function decorateSheet(seed = 0) {
    const host = document.getElementById("sheet-flowers");
    if (!host) return;
    clear(host);
    const placements = [
      { type: pick(TYPES, seed), cls: "deco-flower--sheet-tl", pal: pick(PALETTES, seed + 1) },
      { type: pick(TYPES, seed + 3), cls: "deco-flower--sheet-br", pal: pick(PALETTES, seed + 3) },
    ];
    for (const item of placements) {
      host.appendChild(renderFlower(item.type, item.pal, item.cls));
    }
  }

  function hydrateStatic() {
    document.querySelectorAll("[data-flower]").forEach((node, i) => {
      const type = node.getAttribute("data-flower") || pick(TYPES, i);
      const pal = pick(PALETTES, i + 2);
      const draw = FLOWERS[type] || FLOWERS.daisy;
      node.innerHTML = draw(pal.c1, pal.c2, pal.center);
    });
  }

  window.DaywingFlowers = { decoratePage, decorateSheet, hydrateStatic };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      decoratePage();
      hydrateStatic();
    });
  } else {
    decoratePage();
    hydrateStatic();
  }
})();
