/* Daywing — lightweight Three.js butterfly (flapping wings + grounded shadow). */
(function () {
  function hex(c) {
    return new THREE.Color(c);
  }

  function paintWingTexture(upper, lower, spots, leaf, mirror) {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.setTransform(mirror ? -1 : 1, 0, 0, 1, mirror ? w : 0, 0);

    // Wing silhouette
    ctx.beginPath();
    ctx.moveTo(w * 0.92, h * 0.48);
    ctx.bezierCurveTo(w * 0.7, h * 0.05, w * 0.25, h * 0.02, w * 0.08, h * 0.28);
    ctx.bezierCurveTo(w * 0.02, h * 0.42, w * 0.08, h * 0.55, w * 0.22, h * 0.52);
    ctx.bezierCurveTo(w * 0.12, h * 0.72, w * 0.2, h * 0.92, w * 0.42, h * 0.88);
    ctx.bezierCurveTo(w * 0.58, h * 0.78, w * 0.72, h * 0.62, w * 0.92, h * 0.52);
    ctx.closePath();
    ctx.clip();

    const g1 = ctx.createLinearGradient(0, 0, w * 0.2, h);
    g1.addColorStop(0, upper[2] || upper[1]);
    g1.addColorStop(0.4, upper[1]);
    g1.addColorStop(0.62, lower[0]);
    g1.addColorStop(1, lower[2] || lower[1]);
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, w, h);

    // Soft scale noise
    for (let i = 0; i < 900; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = 1.2 + Math.random() * 2.4;
      ctx.fillStyle =
        y < h * 0.48
          ? `rgba(255,255,255,${0.04 + Math.random() * 0.08})`
          : `rgba(40,30,20,${0.03 + Math.random() * 0.07})`;
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.4, r, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    const orange = (upper[0] || "").toLowerCase();
    const isMonarchish = orange.includes("e87") || orange.includes("f09") || orange.includes("e878");

    // Edge spots
    ctx.fillStyle = spots || "#f7f2e8";
    [
      [0.14, 0.26],
      [0.1, 0.36],
      [0.2, 0.2],
      [0.08, 0.46],
    ].forEach(([px, py], i) => {
      ctx.globalAlpha = 0.75 - i * 0.08;
      ctx.beginPath();
      ctx.ellipse(w * px, h * py, 14 - i * 2, 10 - i, 0, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Faint botanical marks on lower wing
    ctx.fillStyle = leaf || "#2f5c48";
    ctx.globalAlpha = isMonarchish ? 0.05 : 0.18;
    ctx.beginPath();
    ctx.moveTo(w * 0.34, h * 0.68);
    ctx.quadraticCurveTo(w * 0.28, h * 0.78, w * 0.36, h * 0.86);
    ctx.quadraticCurveTo(w * 0.42, h * 0.78, w * 0.34, h * 0.68);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Veins (heavier black network for monarch)
    ctx.strokeStyle = isMonarchish ? "rgba(12,10,8,0.72)" : "rgba(20,35,30,0.28)";
    ctx.lineWidth = isMonarchish ? 3.2 : 2;
    ctx.lineCap = "round";
    const veins = [
      [0.9, 0.48, 0.2, 0.22],
      [0.9, 0.5, 0.12, 0.48],
      [0.9, 0.52, 0.28, 0.82],
      [0.7, 0.34, 0.3, 0.55],
      [0.66, 0.55, 0.36, 0.78],
    ];
    if (isMonarchish) {
      veins.push([0.85, 0.4, 0.35, 0.3], [0.82, 0.58, 0.4, 0.7], [0.78, 0.5, 0.25, 0.55]);
    }
    veins.forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath();
      ctx.moveTo(w * x1, h * y1);
      ctx.quadraticCurveTo(w * ((x1 + x2) / 2 - 0.05), h * ((y1 + y2) / 2), w * x2, h * y2);
      ctx.stroke();
    });

    if (isMonarchish) {
      // Dark rim like a monarch border
      ctx.strokeStyle = "rgba(10,8,6,0.85)";
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(w * 0.92, h * 0.48);
      ctx.bezierCurveTo(w * 0.7, h * 0.05, w * 0.25, h * 0.02, w * 0.08, h * 0.28);
      ctx.bezierCurveTo(w * 0.02, h * 0.42, w * 0.08, h * 0.55, w * 0.22, h * 0.52);
      ctx.bezierCurveTo(w * 0.12, h * 0.72, w * 0.2, h * 0.92, w * 0.42, h * 0.88);
      ctx.bezierCurveTo(w * 0.58, h * 0.78, w * 0.72, h * 0.62, w * 0.92, h * 0.52);
      ctx.stroke();
    } else {
      ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.92, h * 0.48);
      ctx.bezierCurveTo(w * 0.7, h * 0.05, w * 0.25, h * 0.02, w * 0.08, h * 0.28);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  }

  function punchToCanvas(image) {
    const canvas = document.createElement("canvas");
    const w = image.naturalWidth || image.width;
    const h = image.naturalHeight || image.height;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, w, h);
    const img = ctx.getImageData(0, 0, w, h);
    const d = img.data;
    const sample = (x, y) => {
      const i = (y * w + x) * 4;
      return { r: d[i], g: d[i + 1], b: d[i + 2], a: d[i + 3] };
    };
    const isBg = (p) => {
      const max = Math.max(p.r, p.g, p.b);
      const min = Math.min(p.r, p.g, p.b);
      const sat = max - min;
      const lum = (p.r + p.g + p.b) / 3;
      return lum > 232 && sat < 28;
    };
    const visited = new Uint8Array(w * h);
    const stack = [];
    const push = (x, y) => {
      if (x < 0 || y < 0 || x >= w || y >= h) return;
      const idx = y * w + x;
      if (visited[idx]) return;
      visited[idx] = 1;
      const p = sample(x, y);
      if (!isBg(p) && p.a > 8) return;
      stack.push(idx);
    };
    for (let x = 0; x < w; x++) {
      push(x, 0);
      push(x, h - 1);
    }
    for (let y = 0; y < h; y++) {
      push(0, y);
      push(w - 1, y);
    }
    while (stack.length) {
      const idx = stack.pop();
      const x = idx % w;
      const y = (idx / w) | 0;
      d[idx * 4 + 3] = 0;
      push(x + 1, y);
      push(x - 1, y);
      push(x, y + 1);
      push(x, y - 1);
    }
    ctx.putImageData(img, 0, 0);
    return canvas;
  }

  function punchBackground(image) {
    const canvas = punchToCanvas(image);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    tex.needsUpdate = true;
    return tex;
  }

  function halfWingTexture(fullCanvas, side) {
    const fw = fullCanvas.width;
    const fh = fullCanvas.height;
    const hw = Math.floor(fw / 2);
    const canvas = document.createElement("canvas");
    canvas.width = hw;
    canvas.height = fh;
    const ctx = canvas.getContext("2d");
    // Slight overlap into the opposite half so the body seam stays continuous
    const overlap = Math.floor(hw * 0.04);
    if (side === "left") {
      ctx.drawImage(fullCanvas, 0, 0, hw + overlap, fh, 0, 0, hw, fh);
    } else {
      ctx.drawImage(fullCanvas, hw - overlap, 0, hw + overlap, fh, 0, 0, hw, fh);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    tex.needsUpdate = true;
    return tex;
  }

  function centerStripTexture(fullCanvas) {
    const fw = fullCanvas.width;
    const fh = fullCanvas.height;
    const stripW = Math.max(8, Math.floor(fw * 0.16));
    const x0 = Math.floor((fw - stripW) / 2);
    const canvas = document.createElement("canvas");
    canvas.width = stripW;
    canvas.height = fh;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(fullCanvas, x0, 0, stripW, fh, 0, 0, stripW, fh);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    tex.needsUpdate = true;
    return tex;
  }

  function makeWing(tex, span = 1.15, height = 1.35) {
    const geo = new THREE.PlaneGeometry(span, height, 12, 12);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(i, Math.sin(((x + span / 2) / span) * Math.PI) * 0.035 + y * 0.01);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      transparent: true,
      alphaTest: 0.12,
      side: THREE.DoubleSide,
      roughness: 0.58,
      metalness: 0.02,
      depthWrite: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    return mesh;
  }

  function buildButterfly(spec) {
    const group = new THREE.Group();
    const upper = spec.upper || ["#6eb0a8", "#8fc4bc", "#b7ddd6"];
    const lower = spec.lower || ["#e6b7ab", "#d9a79c", "#c9958c"];
    const bodyColor = spec.body || "#1e3d32";
    const spots = spec.spots || "#f7f2e8";
    const leaf = spec.leaf || "#2f5c48";

    const texL = paintWingTexture(upper, lower, spots, leaf, false);
    const texR = paintWingTexture(upper, lower, spots, leaf, true);

    const left = new THREE.Group();
    const right = new THREE.Group();
    // Hinge at the body: taller than wide so the butterfly reads elongated
    const span = 0.88;
    const height = 1.42;
    const wingL = makeWing(texL, span, height);
    const wingR = makeWing(texR, span, height);
    wingL.position.set(-span / 2, 0.02, 0);
    wingR.position.set(span / 2, 0.02, 0);
    left.add(wingL);
    right.add(wingR);

    const bodyMat = new THREE.MeshStandardMaterial({
      color: hex(bodyColor),
      roughness: 0.7,
      metalness: 0.08,
    });
    const abdomen = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.42, 6, 12), bodyMat);
    abdomen.position.set(0, -0.05, 0.03);
    abdomen.castShadow = true;

    const thorax = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 12), bodyMat);
    thorax.position.set(0, 0.07, 0.04);
    thorax.castShadow = true;

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.05, 14, 10), bodyMat);
    head.position.set(0, 0.18, 0.05);
    head.castShadow = true;

    const antennaGeo = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.2, 0.05),
        new THREE.Vector3(-0.04, 0.34, 0.07),
        new THREE.Vector3(-0.08, 0.44, 0.03),
      ]),
      12,
      0.006,
      5,
      false
    );
    const antennaMat = new THREE.MeshStandardMaterial({ color: hex(bodyColor), roughness: 0.6 });
    const a1 = new THREE.Mesh(antennaGeo, antennaMat);
    const a2 = a1.clone();
    a2.scale.x = -1;
    const club1 = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 8), antennaMat);
    club1.position.set(-0.08, 0.44, 0.03);
    const club2 = club1.clone();
    club2.position.x = 0.08;

    const bodyParts = [abdomen, thorax, head, a1, a2, club1, club2];
    group.add(left, right, ...bodyParts);
    group.userData.left = left;
    group.userData.right = right;
    group.userData.bodyParts = bodyParts;
    group.userData.wingL = wingL;
    group.userData.wingR = wingR;
    // Orientation is driven in flight via quaternions (head = +Y)

    if (spec.photo) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const full = punchToCanvas(img);
          const mapL = halfWingTexture(full, "left");
          const mapR = halfWingTexture(full, "right");
          const mapC = centerStripTexture(full);

          wingL.material.map = mapL;
          wingR.material.map = mapR;
          wingL.material.needsUpdate = true;
          wingR.material.needsUpdate = true;

          // Inner edges hinged at body — elongated (taller than wide)
          const sX = 1.05;
          const sY = 1.38;
          const half = (span * sX) / 2;
          wingL.scale.set(sX, sY, 1);
          wingR.scale.set(sX, sY, 1);
          wingL.position.set(-half + 0.02, 0.01, 0);
          wingR.position.set(half - 0.02, 0.01, 0);

          // Narrow center strip only — covers the hinge, not a second butterfly
          const bodyStrip = makeWing(mapC, 0.16, height * 0.98);
          bodyStrip.scale.set(sX, sY, 1);
          bodyStrip.position.set(0, 0.01, 0.015);
          bodyStrip.renderOrder = 2;
          group.add(bodyStrip);
          group.userData.bodyStrip = bodyStrip;

          bodyParts.forEach((p) => {
            p.visible = false;
          });
        } catch (err) {
          console.warn("Butterfly photo load failed", err);
        }
      };
      img.src = spec.photo;
    }

    return group;
  }

  function paintLeafTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 256, 128);
    ctx.beginPath();
    ctx.moveTo(8, 64);
    ctx.bezierCurveTo(40, 8, 120, 4, 248, 64);
    ctx.bezierCurveTo(120, 124, 40, 120, 8, 64);
    ctx.closePath();
    ctx.clip();
    const g = ctx.createLinearGradient(0, 0, 256, 128);
    g.addColorStop(0, "#8fd49a");
    g.addColorStop(0.45, "#4fa86a");
    g.addColorStop(1, "#2f6f45");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 128);
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(16, 64);
    ctx.quadraticCurveTo(130, 58, 240, 64);
    ctx.stroke();
    ctx.strokeStyle = "rgba(20,60,30,0.25)";
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(40 + i * 35, 64);
      ctx.quadraticCurveTo(70 + i * 35, 40 + (i % 2) * 40, 100 + i * 35, 64);
      ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  function paintPetalTexture(colors, shape) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();
    if (shape === "pointed") {
      ctx.moveTo(w * 0.5, h * 0.04);
      ctx.bezierCurveTo(w * 0.78, h * 0.22, w * 0.9, h * 0.55, w * 0.72, h * 0.92);
      ctx.quadraticCurveTo(w * 0.5, h * 0.78, w * 0.28, h * 0.92);
      ctx.bezierCurveTo(w * 0.1, h * 0.55, w * 0.22, h * 0.22, w * 0.5, h * 0.04);
    } else if (shape === "round") {
      ctx.ellipse(w * 0.5, h * 0.52, w * 0.38, h * 0.42, 0, 0, Math.PI * 2);
    } else {
      ctx.moveTo(w * 0.5, h * 0.06);
      ctx.bezierCurveTo(w * 0.78, h * 0.18, w * 0.86, h * 0.55, w * 0.62, h * 0.92);
      ctx.quadraticCurveTo(w * 0.5, h * 0.84, w * 0.38, h * 0.92);
      ctx.bezierCurveTo(w * 0.14, h * 0.55, w * 0.22, h * 0.18, w * 0.5, h * 0.06);
    }
    ctx.closePath();
    ctx.clip();

    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, colors[2] || "#fff8f0");
    g.addColorStop(0.45, colors[1] || colors[0]);
    g.addColorStop(1, colors[0]);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  function makePetal(tex, w = 0.42, h = 0.7) {
    const geo = new THREE.PlaneGeometry(w, h, 8, 8);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(i, Math.sin(((y + h / 2) / h) * Math.PI) * 0.04 + Math.abs(x) * 0.02);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      transparent: true,
      alphaTest: 0.35,
      side: THREE.DoubleSide,
      roughness: 0.62,
      metalness: 0.02,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  function addStemAndLeaves(group, stemColor, bloomY) {
    const stemMat = new THREE.MeshStandardMaterial({
      color: hex(stemColor || "#3f8a55"),
      roughness: 0.72,
      metalness: 0.04,
    });
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.042, bloomY + 0.12, 12), stemMat);
    stem.position.y = bloomY / 2 - 0.04;
    stem.castShadow = true;
    group.add(stem);

    const leafTex = paintLeafTexture();
    const leafMat = new THREE.MeshStandardMaterial({
      map: leafTex,
      transparent: true,
      alphaTest: 0.4,
      side: THREE.DoubleSide,
      roughness: 0.68,
    });
    function leaf(x, y, rotY, rotZ, sx) {
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.55 * sx, 0.26), leafMat);
      mesh.position.set(x, y, 0.02);
      mesh.rotation.set(-0.35, rotY, rotZ);
      mesh.castShadow = true;
      group.add(mesh);
    }
    leaf(-0.28, bloomY * 0.32, 0.4, 0.55, 1.05);
    leaf(0.26, bloomY * 0.46, -0.35, -0.5, 0.92);
  }

  function addPhotoBloom(group, tex, bloomY, size = 1.35) {
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      transparent: true,
      alphaTest: 0.28,
      side: THREE.DoubleSide,
      roughness: 0.55,
      metalness: 0.02,
      depthWrite: false,
    });
    // Crossed photo planes give depth from most camera angles
    const bloom = new THREE.Group();
    bloom.position.y = bloomY;
    for (let i = 0; i < 2; i++) {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
      plane.rotation.y = (i * Math.PI) / 2;
      plane.castShadow = true;
      bloom.add(plane);
    }
    // Slight tilt toward camera for a natural landing face
    const face = new THREE.Mesh(new THREE.PlaneGeometry(size * 0.98, size * 0.98), mat.clone());
    face.rotation.x = -0.55;
    face.position.y = 0.04;
    face.castShadow = true;
    bloom.add(face);
    group.add(bloom);
    group.userData.bloom = bloom;
  }

  function buildProceduralBloom(group, spec, bloomY) {
    const petals = spec.petals || ["#ff6b7a", "#ff8f9a", "#ffd0d6"];
    const center = spec.center || ["#ffe08a", "#f0b429"];
    const type = spec.type || "daisy";
    const texOval = paintPetalTexture(petals, "oval");
    const discMat = new THREE.MeshStandardMaterial({
      color: hex(center[0]),
      roughness: 0.55,
      emissive: hex(center[0]),
      emissiveIntensity: 0.08,
    });
    const n = type === "poppy" || type === "hibiscus" ? 5 : 12;
    for (let i = 0; i < n; i++) {
      const petal = makePetal(texOval, 0.44, 0.68);
      const a = (i / n) * Math.PI * 2;
      petal.position.set(Math.cos(a) * 0.16, bloomY, Math.sin(a) * 0.16);
      petal.rotation.y = -a + Math.PI / 2;
      petal.rotation.x = -1.1;
      group.add(petal);
    }
    const disc = new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 12), discMat);
    disc.position.y = bloomY + 0.02;
    disc.scale.set(1, 0.5, 1);
    group.add(disc);
  }

  function buildFlower(spec) {
    const group = new THREE.Group();
    const stem = spec.stem || "#3f8a55";
    const bloomY = 1.0;
    const landY = bloomY + 0.28;

    addStemAndLeaves(group, stem, bloomY);
    group.userData.landY = landY;
    group.userData.bloomY = bloomY;

    if (spec.photo) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const tex = punchBackground(img);
          addPhotoBloom(group, tex, bloomY, 1.42);
        } catch (err) {
          console.warn("Flower photo punch failed", err);
          buildProceduralBloom(group, spec, bloomY);
        }
      };
      img.onerror = () => buildProceduralBloom(group, spec, bloomY);
      img.src = spec.photo;
    } else {
      buildProceduralBloom(group, spec, bloomY);
    }

    return group;
  }

  function hashId(id) {
    let h = 2166136261;
    const s = String(id || "butterfly");
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  // Named flight personalities — foraging styles while picking a bloom.
  const PERSONALITIES = {
    "teal-blush": {
      label: "drifter",
      entry: "meadow",
      speed: 1.15,
      delay: 0.35,
      climb: 1.1,
      weave: 1.35,
      depth: 1.05,
      bob: 0.95,
      flapBase: 7.8,
      flapBurst: 3.0,
      flapAmp: 0.46,
      bank: 0.9,
      landAt: 0.85,
      inspects: 2,
    },
    "sky-swallowtail": {
      label: "dart",
      entry: "right",
      speed: 1.05,
      delay: 0.35,
      climb: 1.25,
      weave: 1.85,
      depth: 1.3,
      bob: 1.25,
      flapBase: 11.2,
      flapBurst: 5.2,
      flapAmp: 0.66,
      bank: 1.35,
      inspects: 3,
      landAt: 0.83,
    },
    "violet-copper": {
      label: "spiral",
      entry: "meadow-left",
      speed: 1.12,
      delay: 0.5,
      climb: 1.35,
      weave: 1.55,
      depth: 1.35,
      bob: 1.0,
      flapBase: 8.4,
      flapBurst: 3.8,
      flapAmp: 0.54,
      bank: 1.15,
      inspects: 2,
      landAt: 0.86,
    },
    "jade-wing": {
      label: "glider",
      entry: "meadow",
      speed: 1.25,
      delay: 0.25,
      climb: 0.9,
      weave: 0.95,
      depth: 0.95,
      bob: 0.6,
      flapBase: 6.0,
      flapBurst: 2.2,
      flapAmp: 0.36,
      bank: 0.7,
      inspects: 2,
      landAt: 0.88,
    },
    "amber-morpho": {
      label: "swooper",
      entry: "right-high",
      speed: 1.08,
      delay: 0.3,
      climb: 1.4,
      weave: 1.4,
      depth: 1.4,
      bob: 1.2,
      flapBase: 9.6,
      flapBurst: 4.6,
      flapAmp: 0.6,
      bank: 1.35,
      inspects: 3,
      landAt: 0.84,
    },
    "rose-glasswing": {
      label: "flutter",
      entry: "meadow-right",
      speed: 1.2,
      delay: 0.4,
      climb: 1.05,
      weave: 2.2,
      depth: 1.15,
      bob: 1.55,
      flapBase: 12.2,
      flapBurst: 5.8,
      flapAmp: 0.7,
      bank: 1.05,
      inspects: 3,
      landAt: 0.85,
    },
    "indigo-pearl": {
      label: "arc",
      entry: "meadow-left",
      speed: 1.12,
      delay: 0.35,
      climb: 1.15,
      weave: 1.2,
      depth: 1.2,
      bob: 0.85,
      flapBase: 8.8,
      flapBurst: 3.6,
      flapAmp: 0.52,
      bank: 1.0,
      landAt: 0.84,
      inspects: 2,
    },
    monarch: {
      label: "forager",
      entry: "meadow-right",
      speed: 1.18,
      delay: 0.45,
      climb: 1.2,
      weave: 1.55,
      depth: 1.25,
      bob: 1.05,
      flapBase: 9.2,
      flapBurst: 4.2,
      flapAmp: 0.58,
      bank: 1.2,
      landAt: 0.86,
      inspects: 3,
    },
  };

  function personalityFor(spec = {}) {
    const id = spec.id || "teal-blush";
    const base = PERSONALITIES[id] || {
      label: "forager",
      entry: "left",
      path: "forage",
      speed: 1.1,
      delay: 0.3,
      climb: 1.2,
      weave: 1.5,
      depth: 1.2,
      bob: 1.0,
      flapBase: 9,
      flapBurst: 4,
      flapAmp: 0.55,
      bank: 1.05,
      landAt: 0.84,
      inspects: 2,
    };
    const h = hashId(id);
    const jitter = (n, spread) => 1 + ((((h >> n) & 255) / 255) * 2 - 1) * spread;
    const speed = (base.speed || 1.1) * jitter(0, 0.04);
    const delay = Math.max(0.15, (base.delay || 0.35) * jitter(8, 0.1));
    // Slow meadow drift — longer path so they meander before landing
    const flightSec = THREE.MathUtils.clamp(15.5 * speed, 13.5, 20);
    return {
      ...base,
      path: "forage",
      inspects: base.inspects || 2,
      id,
      speed,
      delay,
      flightSec,
      climb: (base.climb || 1.2) * jitter(16, 0.08) * 0.85,
      weave: (base.weave || 1.4) * jitter(24, 0.08) * 0.7,
      depth: (base.depth || 1.2) * jitter(4, 0.08),
      bob: (base.bob || 1) * jitter(12, 0.1) * 0.9,
      flapBase: (base.flapBase || 9) * 0.62,
      flapBurst: (base.flapBurst || 4) * 0.55,
      flapAmp: (base.flapAmp || 0.55) * 0.85,
      bank: (base.bank || 1) * 0.45,
    };
  }

  function entryPoint(p, rest) {
    switch (p.entry) {
      case "right":
        return { x: 6.6, y: 0.25, z: 2.0 };
      case "right-high":
        return { x: 6.2, y: 0.95, z: 1.5 };
      case "right-low":
        return { x: 6.4, y: -0.05, z: 2.4 };
      case "left-high":
        return { x: -6.4, y: 1.0, z: 1.35 };
      case "left-low":
        return { x: -6.6, y: -0.08, z: 2.3 };
      case "back":
        return { x: -1.0, y: 0.55, z: 3.3 };
      case "meadow":
        return { x: rest.x + 0.55, y: rest.y - 0.55, z: rest.z + 1.05 };
      case "meadow-left":
        return { x: rest.x - 1.35, y: rest.y - 0.62, z: rest.z + 1.25 };
      case "meadow-right":
        return { x: rest.x + 1.45, y: rest.y - 0.58, z: rest.z + 0.95 };
      case "left":
      default:
        return { x: -6.5, y: 0.15, z: 2.1 };
    }
  }

  function mount(container, spec, opts = {}) {
    if (!window.THREE) {
      console.warn("Three.js not loaded");
      return null;
    }
    const traits = personalityFor(spec || {});
    const flightSec = opts.flightSec || traits.flightSec;
    const startDelay = opts.startDelay != null ? opts.startDelay : traits.delay;
    // Fill the meadow viewport — witness framing, not a small card
    const width = Math.max(container.clientWidth || window.innerWidth || 800, 320);
    const height = Math.max(container.clientHeight || window.innerHeight || 600, 320);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 60);
    // Eye-level presence: standing in the meadow
    camera.position.set(0.15, 1.55, 5.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    renderer.domElement.className = "bf3d-canvas";
    renderer.domElement.setAttribute("aria-hidden", "true");

    const hemi = new THREE.HemisphereLight(0xf2f7ff, 0x6e8a58, 1.05);
    scene.add(hemi);

    // Warm sun through the meadow — fixed aim so flower shadow stays still
    const key = new THREE.DirectionalLight(0xfff4e6, 1.35);
    key.position.set(1.2, 6.4, 2.4);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.bias = -0.00025;
    key.shadow.normalBias = 0.02;
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 22;
    key.shadow.camera.left = -7;
    key.shadow.camera.right = 7;
    key.shadow.camera.top = 7;
    key.shadow.camera.bottom = -7;
    key.shadow.radius = 1.25;
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xe8f2ff, 0.22);
    fill.position.set(-3.5, 2.5, -1.5);
    scene.add(fill);

    const groundY = -0.55;
    // Fixed witness gaze — do NOT lookAt each seat, or every land reads as "center".
    camera.lookAt(0.1, 0.42, 0.35);
    // Keep seats in the clear mid meadow (above grass, inside the frame).
    const meadowLandings = [
      { x: -0.95, y: 0.4, z: 0.85 },
      { x: -0.65, y: 0.46, z: 1.15 },
      { x: -0.35, y: 0.38, z: 0.7 },
      { x: -0.1, y: 0.44, z: 1.05 },
      { x: 0.15, y: 0.42, z: 0.8 },
      { x: 0.4, y: 0.48, z: 1.2 },
      { x: 0.7, y: 0.4, z: 0.95 },
      { x: 0.95, y: 0.45, z: 1.1 },
      { x: -0.8, y: 0.36, z: 1.35 },
      { x: 0.55, y: 0.36, z: 1.4 },
      { x: -0.5, y: 0.5, z: 0.55 },
      { x: 0.25, y: 0.5, z: 0.6 },
      { x: -0.2, y: 0.34, z: 1.25 },
      { x: 0.85, y: 0.38, z: 0.75 },
    ];
    const seed =
      opts.landingSeed != null
        ? opts.landingSeed >>> 0
        : hashId(`${(spec && spec.id) || "meadow"}:${opts.dateIso || ""}`);
    const landIdx = seed % meadowLandings.length;
    const seat = meadowLandings[landIdx];
    // Light jitter — stay inside the visible pocket
    const jx = (((seed >>> 8) & 255) / 255 - 0.5) * 0.18;
    const jy = (((seed >>> 16) & 255) / 255 - 0.5) * 0.06;
    const jz = (((seed >>> 24) & 255) / 255 - 0.5) * 0.14;
    const rest = {
      x: THREE.MathUtils.clamp(seat.x + jx, -1.05, 1.05),
      y: THREE.MathUtils.clamp(seat.y + jy, 0.32, 0.52),
      z: THREE.MathUtils.clamp(seat.z + jz, 0.5, 1.45),
    };

    // Fixed sun aim near the landing bloom — keeps shadow still.
    key.target.position.set(rest.x, groundY + 0.35, rest.z);
    scene.add(key.target);
    key.target.updateMatrixWorld();

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 14),
      new THREE.ShadowMaterial({ opacity: 0.22 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = groundY;
    ground.receiveShadow = true;
    scene.add(ground);

    const butterfly = buildButterfly(spec || {});
    // Narrower span, longer body — smaller in the meadow
    const baseScale = { x: 0.17, y: 0.23, z: 0.19 };
    butterfly.scale.set(baseScale.x, baseScale.y, baseScale.z);
    const fromMeadow = String(traits.entry || "").startsWith("meadow");
    const start = entryPoint(traits, rest);
    // Keep side entries from starting so far off-screen that they "pop" into view
    if (!fromMeadow) {
      start.x = THREE.MathUtils.clamp(start.x, -2.4, 2.4);
      start.y = THREE.MathUtils.clamp(start.y, 0.15, 1.1);
      start.z = THREE.MathUtils.clamp(start.z, 0.5, 2.0);
    }
    butterfly.position.set(start.x, start.y, start.z);
    let meadowEmerged = !fromMeadow;
    if (fromMeadow) {
      butterfly.traverse((obj) => {
        if (obj.isMesh && obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => {
            m.transparent = true;
            m.opacity = 0;
          });
        }
      });
    }
    scene.add(butterfly);

    // Other meadow blooms to "consider" before choosing the landing flower
    const candidates = [];
    const want = Math.max(1, Math.min(3, traits.inspects || 2));
    for (let i = 1; i <= meadowLandings.length && candidates.length < want; i++) {
      const spot = meadowLandings[(landIdx + i * 3) % meadowLandings.length];
      if (Math.hypot(spot.x - rest.x, spot.z - rest.z) > 0.28) {
        candidates.push({
          x: THREE.MathUtils.clamp(spot.x, -1.05, 1.05),
          y: THREE.MathUtils.clamp(spot.y + 0.1 + (i % 2) * 0.05, 0.34, 0.55),
          z: THREE.MathUtils.clamp(spot.z, 0.5, 1.45),
        });
      }
    }
    if (!candidates.length) {
      candidates.push({
        x: THREE.MathUtils.clamp(rest.x + 0.45, -1.05, 1.05),
        y: THREE.MathUtils.clamp(rest.y + 0.2, 0.34, 0.55),
        z: THREE.MathUtils.clamp(rest.z + 0.25, 0.5, 1.45),
      });
    }

    let clockStart = performance.now();
    let raf = 0;
    let alive = true;
    let mode = "flight"; // flight -> hover -> settle
    let landProgress = 0;
    const prevPos = new THREE.Vector3().copy(butterfly.position);
    const tmpDir = new THREE.Vector3();
    const lookDir = new THREE.Vector3(0, 0, -1);
    const toCam = new THREE.Vector3();
    const wingFace = new THREE.Vector3(0, 0, 1); // wing plane faces +Z
    const targetQuat = new THREE.Quaternion();
    const yawQuat = new THREE.Quaternion();
    const restQuat = new THREE.Quaternion();
    const openWing = 0.28;
    const closedWing = 1.18;
    let wingClose = 0;
    let nearFlower = 0; // 0..1 while lingering over a candidate
    const smoothedVel = new THREE.Vector3(0, 0, -1);

    function faceMostlyToCamera(travelHint, yawAmount) {
      toCam.subVectors(camera.position, butterfly.position);
      // Keep wings readable — mostly toward the viewer, gently upright
      toCam.y = Math.max(0.2, toCam.y * 0.45 + 0.35);
      if (toCam.lengthSq() < 1e-8) toCam.set(0, 0.35, 1);
      toCam.normalize();
      targetQuat.setFromUnitVectors(wingFace, toCam);
      // Soft travel yaw only (keeps them from going full profile)
      const yaw =
        Math.atan2(travelHint.x, -travelHint.z || 0.001) *
        THREE.MathUtils.clamp(yawAmount, 0, 0.28);
      yawQuat.setFromAxisAngle(tmpDir.set(0, 1, 0), yaw);
      targetQuat.multiply(yawQuat);
      // Slight nose-down for a natural glide
      yawQuat.setFromAxisAngle(tmpDir.set(1, 0, 0), -0.35);
      targetQuat.multiply(yawQuat);
    }

    // Seed a camera-facing pose
    faceMostlyToCamera(smoothedVel, 0.08);
    butterfly.quaternion.copy(targetQuat);
    restQuat.copy(targetQuat);

    function bezier3(a, b, c, d, t) {
      const u = 1 - t;
      return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d;
    }

    function lerpPt(a, b, t) {
      return {
        x: THREE.MathUtils.lerp(a.x, b.x, t),
        y: THREE.MathUtils.lerp(a.y, b.y, t),
        z: THREE.MathUtils.lerp(a.z, b.z, t),
      };
    }

    // Foraging: enter, inspect blooms, then land — one continuous path (no segment snaps).
    function flightPose(u) {
      const raw = Math.min(1, Math.max(0, u));
      const t = raw * raw * (3 - 2 * raw);
      const n = candidates.length;
      const inspectShare = 0.68;
      const wiggle = (amp, freq, phase = 0) =>
        Math.sin(t * Math.PI * freq + phase) * amp * traits.weave * 0.1;

      // Waypoints stay in the visible meadow pocket
      const clampPt = (p) => ({
        x: THREE.MathUtils.clamp(p.x, -1.35, 1.35),
        y: THREE.MathUtils.clamp(p.y, 0.12, 1.15),
        z: THREE.MathUtils.clamp(p.z, 0.35, 1.75),
      });

      const points = [clampPt(start)];
      for (let i = 0; i < n; i++) {
        const c = candidates[i];
        // Approach a bit above the bloom, then a soft hover — no wild "away" teleport
        points.push(
          clampPt({
            x: c.x + (i % 2 === 0 ? -0.22 : 0.22),
            y: c.y + 0.28,
            z: c.z + 0.18,
          })
        );
        points.push(
          clampPt({
            x: c.x,
            y: c.y + 0.12,
            z: c.z,
          })
        );
      }
      points.push(
        clampPt({
          x: (points[points.length - 1].x + rest.x) * 0.5,
          y: Math.max(points[points.length - 1].y, rest.y) + 0.32,
          z: (points[points.length - 1].z + rest.z) * 0.5 + 0.2,
        })
      );
      points.push(clampPt({ x: rest.x, y: rest.y + 0.08, z: rest.z }));
      points.push(clampPt(rest));

      const segCount = points.length - 1;
      // Spend most of the time on inspect segments; last two segs are final approach
      const landSegs = 2;
      const inspectSegs = Math.max(1, segCount - landSegs);
      let x;
      let y;
      let z;
      let landBlend = 0;
      nearFlower = 0;

      let seg;
      let local;
      if (t < inspectShare) {
        const uInspect = t / inspectShare;
        seg = Math.min(inspectSegs - 1, Math.floor(uInspect * inspectSegs));
        local = uInspect * inspectSegs - seg;
        // Linger near each bloom (slow the middle of the segment)
        const linger = Math.sin(local * Math.PI);
        local = local * (1 - 0.35 * linger) + 0.35 * linger * local;
        nearFlower = linger * 0.85;
      } else {
        const uLand = (t - inspectShare) / (1 - inspectShare);
        landBlend = THREE.MathUtils.smoothstep(uLand, 0.2, 1);
        seg = inspectSegs + Math.min(landSegs - 1, Math.floor(uLand * landSegs));
        local = uLand * landSegs - (seg - inspectSegs);
        nearFlower = landBlend * 0.7;
      }
      seg = Math.min(segCount - 1, Math.max(0, seg));
      local = Math.min(1, Math.max(0, local));
      const ease = local * local * (3 - 2 * local);
      const a = points[seg];
      const b = points[seg + 1];
      x = THREE.MathUtils.lerp(a.x, b.x, ease);
      y = THREE.MathUtils.lerp(a.y, b.y, ease);
      z = THREE.MathUtils.lerp(a.z, b.z, ease);

      const wig = 1 - landBlend;
      x += wiggle(0.07 * wig, 2.2, seg);
      y += wiggle(0.04 * wig, 2.8, seg + 1);
      z += wiggle(0.05 * wig, 1.9, seg + 2);

      if (landBlend > 0) {
        x = THREE.MathUtils.lerp(x, rest.x, landBlend);
        y = THREE.MathUtils.lerp(y, rest.y, landBlend);
        z = THREE.MathUtils.lerp(z, rest.z, landBlend);
      }

      x = THREE.MathUtils.clamp(x, -1.4, 1.4);
      y = THREE.MathUtils.clamp(y, 0.1, 1.2);
      z = THREE.MathUtils.clamp(z, 0.3, 1.8);
      return { x, y, z, t, landBlend, nearFlower };
    }

    // Snap to true start pose (path offsets at u=0)
    {
      const p0 = flightPose(0);
      butterfly.position.set(p0.x, p0.y, p0.z);
      prevPos.copy(butterfly.position);
    }

    function setModeFromOverlay() {
      const overlay = document.getElementById("day-overlay");
      if (!overlay) return;
      if (overlay.classList.contains("is-sheet")) mode = "settle";
      else if (overlay.classList.contains("is-quoting")) mode = "hover";
      else mode = "flight";
    }

    function setWings(closeAmount, flapAmt) {
      const base = THREE.MathUtils.lerp(openWing, closedWing, closeAmount);
      const flap = flapAmt * (1 - closeAmount * 0.95);
      butterfly.userData.left.rotation.y = base + flap;
      butterfly.userData.right.rotation.y = -base - flap;
      butterfly.userData.left.rotation.z = THREE.MathUtils.lerp(0, 0.12, closeAmount);
      butterfly.userData.right.rotation.z = THREE.MathUtils.lerp(0, -0.12, closeAmount);
    }

    function frame(now) {
      if (!alive) return;
      raf = requestAnimationFrame(frame);
      setModeFromOverlay();
      const elapsed = (now - clockStart) / 1000;
      const flightElapsed = Math.max(0, elapsed - startDelay);
      const flightT = Math.min(1, flightElapsed / flightSec);

      const burst = 0.55 + 0.45 * Math.max(0, Math.sin(elapsed * (1.6 + traits.flapBurst * 0.12)));
      let flapSpeed = traits.flapBase + burst * traits.flapBurst;
      let flapAmp = traits.flapAmp * (0.85 + burst * 0.35);
      if (mode === "hover") {
        flapSpeed = traits.flapBase * 0.35;
        flapAmp = 0.08;
      } else if (mode === "settle") {
        flapSpeed = 0.6;
        flapAmp = 0;
      }

      if (mode === "flight") {
        landProgress = 0;
        if (flightElapsed <= 0) {
          const pose = flightPose(0);
          butterfly.position.set(pose.x, pose.y, pose.z);
          flapSpeed *= 0.55;
          flapAmp *= 0.45;
        } else {
          prevPos.copy(butterfly.position);
          const pose = flightPose(flightT);
          butterfly.position.set(pose.x, pose.y, pose.z);

          // Softly appear from the meadow grasses (once), then leave opacity alone
          if (fromMeadow && !meadowEmerged) {
            const emerge = THREE.MathUtils.smoothstep(flightT, 0, 0.18);
            butterfly.traverse((obj) => {
              if (obj.isMesh && obj.material) {
                const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
                mats.forEach((m) => {
                  m.opacity = emerge;
                  if (emerge >= 0.999) {
                    m.opacity = 1;
                    m.depthWrite = true;
                  }
                });
              }
            });
            const grow = 0.78 + emerge * 0.22;
            butterfly.scale.set(baseScale.x * grow, baseScale.y * grow, baseScale.z * grow);
            if (emerge >= 0.999) {
              meadowEmerged = true;
              butterfly.scale.set(baseScale.x, baseScale.y, baseScale.z);
            }
          }

          const hesitate = pose.nearFlower || 0;
          flapSpeed *= 1 - hesitate * 0.55;
          flapAmp *= 1 - hesitate * 0.65;

          wingClose = THREE.MathUtils.lerp(0, 0.35, pose.landBlend);
          if (pose.landBlend > 0.15) {
            flapAmp = THREE.MathUtils.lerp(flapAmp, 0.1, pose.landBlend);
          }

          tmpDir.subVectors(butterfly.position, prevPos);
          const moved = tmpDir.length();
          if (flightT < 0.985) {
            const ahead = flightPose(Math.min(1, flightT + 0.02));
            lookDir.set(ahead.x - pose.x, ahead.y - pose.y, ahead.z - pose.z);
          } else {
            lookDir.copy(tmpDir);
          }
          if (lookDir.lengthSq() < 1e-8 && moved > 1e-6) lookDir.copy(tmpDir);
          if (lookDir.lengthSq() > 1e-8) {
            lookDir.y *= 0.4;
            lookDir.normalize();
            if (moved > 0.0003) smoothedVel.lerp(lookDir, 0.22).normalize();
          }

          // Mostly face the camera; only a hint of turn toward travel
          const yawAmt = 0.12 + (1 - hesitate) * 0.1 * Math.min(1.1, traits.bank || 1);
          faceMostlyToCamera(smoothedVel, yawAmt * (1 - pose.landBlend * 0.7));
          butterfly.quaternion.slerp(targetQuat, 0.12 + (1 - hesitate) * 0.08);

          if (pose.landBlend > 0.15) {
            faceMostlyToCamera(tmpDir.set(0, 0, -1), 0.04);
            restQuat.copy(targetQuat);
            butterfly.quaternion.slerp(restQuat, 0.08 + pose.landBlend * 0.14);
          }
        }
      } else if (mode === "hover") {
        landProgress = Math.min(1, landProgress + 0.028);
        const ease = landProgress * landProgress * (3 - 2 * landProgress);
        wingClose = THREE.MathUtils.lerp(wingClose, 1, 0.08 + ease * 0.12);
        const bobAmt = (1 - ease) * (Math.sin(elapsed * 1.4) * 0.03);
        butterfly.position.x = THREE.MathUtils.lerp(butterfly.position.x, rest.x, 0.08);
        butterfly.position.y = THREE.MathUtils.lerp(butterfly.position.y, rest.y + bobAmt * (1 - ease), 0.1);
        butterfly.position.z = THREE.MathUtils.lerp(butterfly.position.z, rest.z, 0.08);
        butterfly.quaternion.slerp(restQuat, 0.1);
        flapAmp *= 1 - ease;
      } else {
        landProgress = Math.min(1, landProgress + 0.05);
        wingClose = THREE.MathUtils.lerp(wingClose, 1, 0.18);
        butterfly.position.x = THREE.MathUtils.lerp(butterfly.position.x, rest.x, 0.14);
        butterfly.position.y = THREE.MathUtils.lerp(butterfly.position.y, rest.y, 0.16);
        butterfly.position.z = THREE.MathUtils.lerp(butterfly.position.z, rest.z, 0.14);
        butterfly.quaternion.slerp(restQuat, 0.14);
        flapAmp = 0;
      }

      const flap = Math.sin(elapsed * flapSpeed) * flapAmp;
      setWings(wingClose, flap);

      renderer.render(scene, camera);
    }

    raf = requestAnimationFrame(frame);

    const observer = new ResizeObserver(() => {
      const w = Math.max(container.clientWidth || width, 320);
      const h = Math.max(container.clientHeight || height, 320);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    });
    observer.observe(container);

    return {
      destroy() {
        alive = false;
        cancelAnimationFrame(raf);
        observer.disconnect();
        renderer.dispose();
        scene.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
            mats.forEach((m) => {
              if (m.map) m.map.dispose();
              m.dispose();
            });
          }
        });
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      },
    };
  }

  window.DaywingButterfly3D = { mount, personalityFor };
})();
