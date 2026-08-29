const QUOTES = [
  // Motivational
  { text: "Little by little, one travels far.", author: "J.R.R. Tolkien" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "The best way out is always through.", author: "Robert Frost" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Courage is grace under pressure.", author: "Ernest Hemingway" },
  { text: "We are what we repeatedly do.", author: "Aristotle" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Well begun is half done.", author: "Aristotle" },
  { text: "Fall seven times and stand up eight.", author: "Japanese proverb" },
  // Inspirational
  { text: "What you seek is seeking you.", author: "Rumi" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Keep your face always toward the sunshine.", author: "Walt Whitman" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Wherever you go, go with all your heart.", author: "Confucius" },
  { text: "Bloom where you are planted.", author: "Anonymous" },
  { text: "Every day is a fresh beginning.", author: "Anonymous" },
  { text: "Let your life lightly dance on the edges of time.", author: "Rabindranath Tagore" },
  { text: "There is a crack in everything; that is how the light gets in.", author: "Leonard Cohen" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
  { text: "And still, I rise.", author: "Maya Angelou" },
  { text: "The wound is the place where the Light enters you.", author: "Rumi" },
  { text: "Be soft. Do not let the world make you hard.", author: "Anonymous" },
  { text: "You are enough, just as you are.", author: "Anonymous" },
  { text: "Let the beauty of what you love be what you do.", author: "Rumi" },
  { text: "Stars can't shine without darkness.", author: "Anonymous" },
  { text: "Hope is the thing with feathers.", author: "Emily Dickinson" },
];

const KINDNESS_IDEAS = [
  "Send a short thank-you message to someone who helped you recently.",
  "Leave a kind note for a coworker, neighbor, or family member.",
  "Hold the door a little longer for the person behind you.",
  "Compliment someone sincerely — something specific you noticed.",
  "Text a friend just to say you’re thinking of them.",
  "Pick up a piece of litter if you pass one on a walk.",
  "Let someone go ahead of you in line if they seem in a hurry.",
  "Water a plant that isn’t yours — at home, work, or a shared space.",
  "Offer to make tea or coffee for someone nearby.",
  "Share a useful tip or resource that made your day easier.",
  "Smile at a stranger — a small, friendly acknowledgment.",
  "Write a positive review for a local business you like.",
  "Check in on someone you haven’t heard from in a while.",
  "Donate one unused item you no longer need.",
  "Leave the shopping cart closer to the store entrance.",
  "Listen fully to someone without trying to fix anything.",
  "Bring in the neighbor’s bin if it’s still out.",
  "Leave a generous tip when you can.",
  "Share your umbrella, or walk with someone to their car in the rain.",
  "Say someone’s name when you greet them.",
  "Forgive a small mistake today — yours or someone else’s.",
  "Offer your seat if someone looks like they need it more.",
  "Bake or buy something small to share.",
  "Help someone carry a heavy bag or package.",
  "Leave a book you loved somewhere for a stranger to find.",
  "Thank a service worker by name if they’re wearing a name tag.",
  "Give someone the benefit of the doubt in a minor frustration.",
  "Share leftover food with a neighbor or coworker.",
  "Recommend a song, show, or quiet place that lifts your mood.",
  "Spend one minute doing something kind for your future self.",
];

/** Watercolor butterflies — same paper-illustration style as the Daywing card image. */
const BUTTERFLIES = [
  {
    id: "teal-blush",
    name: "Teal Blush",
    upper: ["#5fa8a0", "#7eb8b0", "#a8d4ce"],
    lower: ["#e6b7ab", "#d9a79c", "#c9958c"],
    spots: "#f7f2e8",
    body: "#1e3d32",
    leaf: "#2f5c48",
    vein: "#1e3d3255",
    shape: "classic",
    photo: "/static/butterflies/teal-blush.png",
    theme: { a: "#f7fbf7", b: "#eef6e8", c: "#e8f4f1", accent: "#2f6f5e", ink: "#1f2d2a" },
  },
  {
    id: "sky-swallowtail",
    name: "Sky Swallowtail",
    upper: ["#4aa8d4", "#7ec8e8", "#b5e0f4"],
    lower: ["#f0c4a8", "#e8b090", "#d99a78"],
    spots: "#fffaf2",
    body: "#1a3a4a",
    leaf: "#2d5a6a",
    vein: "#1a3a4a55",
    shape: "swallowtail",
    photo: "/static/butterflies/sky-swallowtail.png",
    theme: { a: "#e8f6ff", b: "#d8eef8", c: "#f8ebe4", accent: "#3d7ea6", ink: "#1a3a4a" },
  },
  {
    id: "violet-copper",
    name: "Violet Copper",
    upper: ["#8b6bb5", "#a88bc9", "#c9b0e0"],
    lower: ["#e8a888", "#f0b898", "#d99270"],
    spots: "#faf5ff",
    body: "#2a1f3d",
    leaf: "#5a3d6a",
    vein: "#2a1f3d55",
    shape: "classic",
    photo: "/static/butterflies/violet-copper.png",
    theme: { a: "#f3eaff", b: "#e8dcf8", c: "#f8ebe4", accent: "#7b6bb5", ink: "#2a1f3d" },
  },
  {
    id: "jade-wing",
    name: "Jade Wing",
    upper: ["#4aa882", "#6fc49a", "#a8dfc0"],
    lower: ["#e8b8c8", "#f0c8d4", "#d9a0b0"],
    spots: "#f4fff8",
    body: "#1b4332",
    leaf: "#2d6a4f",
    vein: "#1b433255",
    shape: "round",
    photo: "/static/butterflies/jade-wing.png",
    theme: { a: "#e8f8ef", b: "#d4f0e0", c: "#f8e8ef", accent: "#2d6a4f", ink: "#1b4332" },
  },
  {
    id: "amber-morpho",
    name: "Amber Morpho",
    upper: ["#d4a04a", "#e8b86a", "#f0d090"],
    lower: ["#6a9eb8", "#88b8cc", "#a8d0e0"],
    spots: "#fff8e8",
    body: "#3d2914",
    leaf: "#5c4030",
    vein: "#3d291455",
    shape: "tall",
    photo: "/static/butterflies/amber-morpho.png",
    theme: { a: "#fff6e8", b: "#ffe8c8", c: "#e8f2f6", accent: "#c45c26", ink: "#3d2914" },
  },
  {
    id: "rose-glasswing",
    name: "Rose Glasswing",
    upper: ["#e8a0b0", "#f0b8c4", "#f8d0d8"],
    lower: ["#7eb8c8", "#9eccd8", "#c0e0e8"],
    spots: "#fff5f7",
    body: "#3d2a32",
    leaf: "#5a3d48",
    vein: "#3d2a3255",
    shape: "wide",
    photo: "/static/butterflies/rose-glasswing.png",
    theme: { a: "#fff0f3", b: "#f8e4e8", c: "#e8f4f8", accent: "#b86b7a", ink: "#3d2a32" },
  },
  {
    id: "indigo-pearl",
    name: "Indigo Pearl",
    upper: ["#4a6a9e", "#6a88b8", "#98b0d4"],
    lower: ["#e8c8a0", "#f0d8b8", "#d9b888"],
    spots: "#f2f6ff",
    body: "#1a2438",
    leaf: "#2d3d5a",
    vein: "#1a243855",
    shape: "classic",
    photo: "/static/butterflies/indigo-pearl.png",
    theme: { a: "#e8eef8", b: "#d8e2f0", c: "#f8efe4", accent: "#4a6a9e", ink: "#1a2438" },
  },
  {
    id: "monarch",
    name: "Monarch",
    upper: ["#e87820", "#f09238", "#f5b060"],
    lower: ["#d46818", "#c45c14", "#a84810"],
    spots: "#ffffff",
    body: "#1a1410",
    leaf: "#2a2018",
    vein: "#1a141088",
    shape: "classic",
    photo: "/static/butterflies/monarch.png",
    theme: { a: "#fff6ec", b: "#ffe8d0", c: "#f0f4e8", accent: "#c45c14", ink: "#2a1a10" },
  },
];

// Bright landing blooms — one stable pick per calendar day, colored to contrast wings.
const FLOWERS = [
  {
    id: "coral-peony",
    name: "Coral Peony",
    type: "peony",
    photo: "/static/flowers/coral-peony.png",
    petals: ["#ff6b7a", "#ff8f9a", "#ffd0d6"],
    center: ["#ffe08a", "#f0b429"],
    stem: "#3f8f5a",
  },
  {
    id: "sunburst-daisy",
    name: "Sunburst Daisy",
    type: "daisy",
    photo: "/static/flowers/sunburst-daisy.png",
    petals: ["#ffe566", "#ffd23a", "#fff6b0"],
    center: ["#c45c1a", "#8a3a0c"],
    stem: "#3d8a52",
  },
  {
    id: "scarlet-poppy",
    name: "Scarlet Poppy",
    type: "poppy",
    photo: "/static/flowers/scarlet-poppy.png",
    petals: ["#ff2e3a", "#ff5a45", "#ffb0a0"],
    center: ["#1a1a1a", "#3d2a14"],
    stem: "#3f7a48",
  },
  {
    id: "magenta-cosmos",
    name: "Magenta Cosmos",
    type: "cosmos",
    photo: "/static/flowers/magenta-cosmos.png",
    petals: ["#e0187a", "#ff4da6", "#ffb3d9"],
    center: ["#ffe566", "#f0c020"],
    stem: "#3d8f5c",
  },
  {
    id: "tangerine-marigold",
    name: "Tangerine Marigold",
    type: "marigold",
    photo: "/static/flowers/tangerine-marigold.png",
    petals: ["#ff8a1a", "#ffb347", "#ffe0a0"],
    center: ["#ffd24a", "#e09020"],
    stem: "#3a7a4a",
  },
  {
    id: "ivory-lily",
    name: "Ivory Lily",
    type: "lily",
    photo: "/static/flowers/ivory-lily.png",
    petals: ["#fff8f0", "#ffe8d6", "#ffd0c0"],
    center: ["#f0c84a", "#c4782a"],
    stem: "#3f8a55",
  },
  {
    id: "violet-iris",
    name: "Violet Iris",
    type: "iris",
    photo: "/static/flowers/violet-iris.png",
    petals: ["#7a3dff", "#a86bff", "#e0c4ff"],
    center: ["#ffd24a", "#c9a020"],
    stem: "#3d7a52",
  },
  {
    id: "fuchsia-hibiscus",
    name: "Fuchsia Hibiscus",
    type: "hibiscus",
    photo: "/static/flowers/fuchsia-hibiscus.png",
    petals: ["#ff1f8f", "#ff5eb0", "#ffc2de"],
    center: ["#ffea6a", "#d4a010"],
    stem: "#348a4e",
  },
];

const REVEAL = {
  quoteAtMs: 7800,
  sheetAtMs: 12500,
  flightSec: 7.5,
};

const monthTitle = document.getElementById("month-title");
const dayGrid = document.getElementById("day-grid");
const prevBtn = document.getElementById("prev-month");
const nextBtn = document.getElementById("next-month");
const overlay = document.getElementById("day-overlay");
const backdrop = document.getElementById("overlay-backdrop");
const butterflyHost = document.getElementById("butterfly-host");
const journalDate = document.getElementById("journal-date");
const journalBody = document.getElementById("journal-body");
const saveBtn = document.getElementById("save-entry");
const closeBtn = document.getElementById("close-day");
const saveStatus = document.getElementById("save-status");
const dictationBtn = document.getElementById("dictation-btn");
const dictationStatus = document.getElementById("dictation-status");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const kindnessText = document.querySelector(".kindness-text");
const journalSheet = document.getElementById("journal-sheet");
const sheetButterfly = document.getElementById("sheet-butterfly");
const sheetButterflyLabel = document.getElementById("sheet-butterfly-label");
const butterflyName = document.getElementById("butterfly-name");
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");
const taskNotes = document.getElementById("task-notes");
const iconPicker = document.getElementById("icon-picker");
const appointmentsGrid = document.getElementById("appointments-grid");

const PLAN_ICONS = [
  {
    id: "general",
    label: "General",
    glyph: "✦",
    editorTitle: "General plan",
    titleHint: "What do you need to do?",
    detailLabel: "Details",
    detail: "Write anything helpful…",
  },
  {
    id: "work",
    label: "Work",
    glyph: "briefcase",
    editorTitle: "Work editor",
    titleHint: "Meeting, deadline, or task…",
    detailLabel: "Work details",
    detail: "Project, link, coworkers, or notes…",
  },
  {
    id: "doctor",
    label: "Doctor",
    glyph: "plus",
    editorTitle: "Doctor editor",
    titleHint: "Appointment name…",
    detailLabel: "Visit details",
    detail: "Clinic, address, doctor name, or prep notes…",
  },
  {
    id: "meeting",
    label: "Meeting",
    glyph: "people",
    editorTitle: "Meeting editor",
    titleHint: "Who are you meeting?",
    detailLabel: "Meeting details",
    detail: "Place, video link, or agenda…",
  },
  {
    id: "home",
    label: "Home",
    glyph: "home",
    editorTitle: "Home editor",
    titleHint: "Chore or home plan…",
    detailLabel: "Home details",
    detail: "What needs doing, supplies, or notes…",
  },
  {
    id: "school",
    label: "School",
    glyph: "book",
    editorTitle: "School editor",
    titleHint: "Class or assignment…",
    detailLabel: "School details",
    detail: "Teacher, due date notes, or materials…",
  },
  {
    id: "fitness",
    label: "Fitness",
    glyph: "bolt",
    editorTitle: "Fitness editor",
    titleHint: "Workout or activity…",
    detailLabel: "Fitness details",
    detail: "Workout plan, place, or goals…",
  },
  {
    id: "shopping",
    label: "Shopping",
    glyph: "bag",
    editorTitle: "Shopping editor",
    titleHint: "Store or errand…",
    detailLabel: "Shopping list",
    detail: "Items to buy, store, or budget notes…",
  },
  {
    id: "travel",
    label: "Travel",
    glyph: "plane",
    editorTitle: "Travel editor",
    titleHint: "Trip or departure…",
    detailLabel: "Travel details",
    detail: "Flight, hotel, destination, or packing notes…",
  },
  {
    id: "call",
    label: "Call",
    glyph: "phone",
    editorTitle: "Call editor",
    titleHint: "Who to call…",
    detailLabel: "Call details",
    detail: "Phone number, topic, or reminders…",
  },
  {
    id: "bill",
    label: "Bills",
    glyph: "card",
    editorTitle: "Bills editor",
    titleHint: "Bill or payment…",
    detailLabel: "Bill details",
    detail: "Account, amount, due notes…",
  },
  {
    id: "meal",
    label: "Meal",
    glyph: "fork",
    editorTitle: "Meal editor",
    titleHint: "Breakfast, lunch, dinner…",
    detailLabel: "Meal details",
    detail: "Recipe, place, guests, or grocery needs…",
  },
  {
    id: "birthday",
    label: "Birthday",
    glyph: "gift",
    editorTitle: "Birthday editor",
    titleHint: "Whose birthday?",
    detailLabel: "Birthday details",
    detail: "Gift ideas, party plans, card notes…",
  },
  {
    id: "reminder",
    label: "Reminder",
    glyph: "bell",
    editorTitle: "Reminder editor",
    titleHint: "What to remember…",
    detailLabel: "Reminder details",
    detail: "Anything you don’t want to forget…",
  },
];

let selectedIcon = "general";
let expandedTaskId = null;
let monthAppointments = [];

const iconEditorGlyph = document.getElementById("icon-editor-glyph");
const iconEditorTitle = document.getElementById("icon-editor-title");
const taskNotesLabel = document.getElementById("task-notes-label");
const taskAddBtn = document.getElementById("task-add-btn");

function iconMeta(id) {
  return PLAN_ICONS.find((item) => item.id === id) || PLAN_ICONS[0];
}

function syncIconEditor() {
  const meta = iconMeta(selectedIcon);
  if (iconEditorGlyph) {
    iconEditorGlyph.innerHTML = iconMarkup(meta.glyph, 22);
  }
  if (iconEditorTitle) {
    iconEditorTitle.textContent = meta.editorTitle;
  }
  if (taskInput) {
    taskInput.placeholder = meta.titleHint;
  }
  if (taskNotes) {
    taskNotes.placeholder = meta.detail;
  }
  if (taskNotesLabel) {
    taskNotesLabel.textContent = meta.detailLabel;
  }
  if (taskAddBtn) {
    taskAddBtn.textContent = `Add ${meta.label.toLowerCase()}`;
  }
}

function syncDetailPlaceholder() {
  syncIconEditor();
}

function formatTimeLabel(value) {
  if (!value) return "";
  const [h, m] = value.split(":").map(Number);
  if (!Number.isFinite(h) || !Number.isFinite(m)) return value;
  const date = new Date();
  date.setHours(h, m, 0, 0);
  return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function formatShortDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function iconMarkup(glyphId, size = 18) {
  // Simple geometric icons (no emoji) so Apple + Windows look consistent
  const common = `viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;
  switch (glyphId) {
    case "briefcase":
      return `<svg ${common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>`;
    case "plus":
      return `<svg ${common}><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>`;
    case "people":
      return `<svg ${common}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c1.5-3 4-4.5 6-4.5S13.5 16 15 19"/><path d="M14 19c.6-1.8 1.8-3 3-3s2.2.8 3 3"/></svg>`;
    case "home":
      return `<svg ${common}><path d="M3 11l9-7 9 7"/><path d="M5 10v9h14v-9"/></svg>`;
    case "book":
      return `<svg ${common}><path d="M4 5h7a3 3 0 0 1 3 3v11H7a3 3 0 0 0-3 3V5z"/><path d="M20 5h-7a3 3 0 0 0-3 3v11h7a3 3 0 0 1 3 3V5z"/></svg>`;
    case "bolt":
      return `<svg ${common}><path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"/></svg>`;
    case "bag":
      return `<svg ${common}><path d="M6 8h12l1 13H5L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`;
    case "plane":
      return `<svg ${common}><path d="M10 21l2-7 8-2-8-2-2-7-2 7-8 2 8 2 2 7z"/></svg>`;
    case "phone":
      return `<svg ${common}><path d="M7 3h4l1 4-2 2a12 12 0 0 0 5 5l2-2 4 1v4a2 2 0 0 1-2 2A16 16 0 0 1 5 5a2 2 0 0 1 2-2z"/></svg>`;
    case "card":
      return `<svg ${common}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>`;
    case "fork":
      return `<svg ${common}><path d="M8 3v7a2 2 0 0 0 2 2v9"/><path d="M8 3c0 3 2 3 2 7M6 3v4M10 3v4"/><path d="M16 3v18M16 3c3 0 4 3 4 7"/></svg>`;
    case "gift":
      return `<svg ${common}><rect x="4" y="10" width="16" height="10" rx="1"/><path d="M12 10v10M4 14h16"/><path d="M12 10c-2-3-5-3-5-1.5S9 10 12 10c2-3 5-3 5-1.5S15 10 12 10z"/></svg>`;
    case "bell":
      return `<svg ${common}><path d="M6 16h12l-1-6a5 5 0 0 0-10 0l-1 6z"/><path d="M10 19a2 2 0 0 0 4 0"/><path d="M12 4v1"/></svg>`;
    default:
      return `<svg ${common}><path d="M12 3l2.2 5.4L20 9l-4 3.8L17.5 19 12 15.8 6.5 19 8 12.8 4 9l5.8-.6L12 3z"/></svg>`;
  }
}

function renderIconPicker() {
  if (!iconPicker) return;
  iconPicker.innerHTML = "";
  for (const item of PLAN_ICONS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `icon-choice${selectedIcon === item.id ? " is-selected" : ""}`;
    btn.dataset.icon = item.id;
    btn.setAttribute("role", "option");
    btn.setAttribute("aria-selected", selectedIcon === item.id ? "true" : "false");
    btn.title = `${item.label} editor`;
    btn.innerHTML = `${iconMarkup(item.glyph)}<span>${item.label}</span>`;
    btn.addEventListener("click", () => {
      selectedIcon = item.id;
      syncIconEditor();
      renderIconPicker();
      if (taskInput) {
        taskInput.focus({ preventScroll: true });
        taskForm?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
    iconPicker.appendChild(btn);
  }
  syncIconEditor();
}

const today = new Date();
let viewYear = today.getFullYear();
let viewMonth = today.getMonth(); // 0-based
let selectedDate = null;
let entryDates = new Set();
let taskDates = new Set();
let dayIcons = new Map(); // date -> unique icon ids
let dayTasks = [];
let saveTimer = null;
let revealTimers = [];

function syncDayIconsFromTasks(iso, tasks) {
  const icons = [];
  for (const task of tasks || []) {
    const id = task.icon || "general";
    if (!icons.includes(id)) icons.push(id);
  }
  if (icons.length) {
    dayIcons.set(iso, icons);
    taskDates.add(iso);
  } else {
    dayIcons.delete(iso);
    taskDates.delete(iso);
  }
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function toISODate(y, m, d) {
  return `${y}-${pad(m + 1)}-${pad(d)}`;
}

function formatDisplayDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function readRotation(key) {
  const n = Number(localStorage.getItem(key) || "0");
  return Number.isFinite(n) ? n : 0;
}

function nextRotation(key, length) {
  const current = readRotation(key);
  const index = ((current % length) + length) % length;
  localStorage.setItem(key, String(current + 1));
  return index;
}

function pickQuote() {
  const i = nextRotation("daywing-quote-rot", QUOTES.length);
  return QUOTES[i];
}

function pickKindnessIdea() {
  const i = nextRotation("daywing-kindness-rot", KINDNESS_IDEAS.length);
  return KINDNESS_IDEAS[i];
}

function pickButterfly() {
  const i = nextRotation("daywing-butterfly-rot-v8", BUTTERFLIES.length);
  return BUTTERFLIES[i];
}

function hashIso(iso) {
  let h = 2166136261;
  for (let i = 0; i < iso.length; i++) {
    h ^= iso.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickFlower(iso, butterfly) {
  // Stable per day; nudge away from butterfly-adjacent hues when possible.
  let idx = hashIso(iso || "1970-01-01") % FLOWERS.length;
  if (butterfly && butterfly.id) {
    const bf = BUTTERFLIES.findIndex((b) => b.id === butterfly.id);
    if (bf >= 0 && idx % BUTTERFLIES.length === bf % FLOWERS.length) {
      idx = (idx + 3) % FLOWERS.length;
    }
  }
  return FLOWERS[idx];
}

function displayName(spec) {
  if (spec.name) return spec.name;
  return spec.id
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function butterflySvg(spec, uid, sizeClass) {
  // Photoreal butterflies with a ground shadow that follows flight motion.
  const src = spec.photo || `/static/butterflies/${spec.id}.png`;
  const label = displayName(spec);
  const isSheet = String(sizeClass).includes("butterfly--sheet");
  return `
    <div class="bf-flight${isSheet ? " bf-flight--sheet" : ""}" data-bf="${uid}">
      <span class="bf-shadow" aria-hidden="true"></span>
      <img
        class="${sizeClass} butterfly-photo"
        src="${src}"
        alt="${label}"
        width="280"
        height="280"
        decoding="async"
        draggable="false"
      />
    </div>
  `;
}

function applySheetTheme(spec) {
  const theme = spec.theme || {
    a: "#f7fbf7",
    b: "#eef6e8",
    c: "#e8f4ff",
    accent: "#2f6f5e",
    ink: "#1f2d2a",
  };
  journalSheet.dataset.theme = spec.id;
  journalSheet.style.setProperty("--sheet-a", theme.a);
  journalSheet.style.setProperty("--sheet-b", theme.b);
  journalSheet.style.setProperty("--sheet-c", theme.c);
  journalSheet.style.setProperty("--sheet-accent", theme.accent);
  journalSheet.style.setProperty("--sheet-ink", theme.ink);
}

let butterfly3d = null;

function renderButterfly(spec) {
  const stamp = Date.now();
  const name = displayName(spec);
  const sizeClass = "butterfly butterfly--photo";

  if (butterflyName) butterflyName.textContent = name;
  if (sheetButterflyLabel) sheetButterflyLabel.textContent = name;

  if (butterfly3d) {
    butterfly3d.destroy();
    butterfly3d = null;
  }

  // Prefer real 3D flapping model when Three.js is available.
  if (window.DaywingButterfly3D && window.THREE) {
    butterflyHost.innerHTML = "";
    butterflyHost.classList.add("butterfly-host--3d");
    const traits =
      (window.DaywingButterfly3D.personalityFor &&
        window.DaywingButterfly3D.personalityFor(spec)) ||
      null;
    spec._flight = traits;
    const landSeed = hashIso(`${spec._landIso || selectedDate || ""}:${spec.id}`);
    butterfly3d = window.DaywingButterfly3D.mount(butterflyHost, spec, {
      flightSec: traits ? traits.flightSec : REVEAL.flightSec,
      startDelay: traits ? traits.delay : 0,
      landingSeed: landSeed,
      dateIso: spec._landIso || selectedDate || "",
    });
  } else {
    butterflyHost.classList.remove("butterfly-host--3d");
    butterflyHost.innerHTML = butterflySvg(spec, `bf-${spec.id}-${stamp}`, sizeClass);
  }

  // Compact photo remains on the journal sheet header.
  if (sheetButterfly) {
    sheetButterfly.innerHTML = butterflySvg(
      spec,
      `sheet-${spec.id}-${stamp}`,
      `${sizeClass} butterfly--sheet`
    );
  }
  applySheetTheme(spec);
  if (window.DaywingFlowers) {
    const seed = BUTTERFLIES.findIndex((b) => b.id === spec.id);
    window.DaywingFlowers.decorateSheet(seed < 0 ? 0 : seed);
  }
}

function clearRevealTimers() {
  revealTimers.forEach((id) => clearTimeout(id));
  revealTimers = [];
}

function monthLabel(y, m) {
  return new Date(y, m, 1).toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });
}

async function loadMonthMarkers() {
  const key = `${viewYear}-${pad(viewMonth + 1)}`;
  const res = await fetch(`/api/entries?month=${key}`);
  if (!res.ok) return;
  const data = await res.json();
  entryDates = new Set(
    (data.entries || []).filter((e) => e.has_entry).map((e) => e.date)
  );
  taskDates = new Set(
    (data.entries || []).filter((e) => e.has_tasks).map((e) => e.date)
  );
  dayIcons = new Map();
  for (const entry of data.entries || []) {
    if (entry.icons && entry.icons.length) {
      dayIcons.set(entry.date, entry.icons);
    }
  }
}

function renderCalendar() {
  monthTitle.textContent = monthLabel(viewYear, viewMonth);
  dayGrid.innerHTML = "";

  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  for (let i = 0; i < firstDow; i += 1) {
    const blank = document.createElement("button");
    blank.type = "button";
    blank.className = "day-cell";
    blank.disabled = true;
    blank.setAttribute("aria-hidden", "true");
    dayGrid.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const iso = toISODate(viewYear, viewMonth, day);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "day-cell";
    btn.dataset.date = iso;
    btn.setAttribute("role", "gridcell");
    btn.setAttribute("aria-label", formatDisplayDate(iso));

    const num = document.createElement("span");
    num.className = "day-num";
    num.textContent = String(day);
    btn.appendChild(num);

    const marks = document.createElement("span");
    marks.className = "day-marks";
    marks.setAttribute("aria-hidden", "true");

    const icons = dayIcons.get(iso) || [];
    const shown = icons.slice(0, 3);
    for (const iconId of shown) {
      const meta = iconMeta(iconId);
      const badge = document.createElement("span");
      badge.className = `day-icon day-icon--${iconId}`;
      badge.title = meta.label;
      badge.innerHTML = iconMarkup(meta.glyph, 11);
      marks.appendChild(badge);
    }
    if (icons.length > 3) {
      const more = document.createElement("span");
      more.className = "day-icon-more";
      more.textContent = `+${icons.length - 3}`;
      marks.appendChild(more);
    }
    if (entryDates.has(iso)) {
      const journalDot = document.createElement("span");
      journalDot.className = "mark mark-journal";
      journalDot.title = "Journal entry";
      marks.appendChild(journalDot);
    }
    btn.appendChild(marks);

    if (
      viewYear === today.getFullYear() &&
      viewMonth === today.getMonth() &&
      day === today.getDate()
    ) {
      btn.classList.add("is-today");
    }
    if (entryDates.has(iso)) btn.classList.add("has-entry");
    if (taskDates.has(iso) || icons.length) btn.classList.add("has-tasks");
    if (selectedDate === iso) btn.classList.add("is-selected");

    btn.addEventListener("click", () => openDay(iso));
    dayGrid.appendChild(btn);
  }
}

function renderTasks() {
  taskList.innerHTML = "";
  if (!dayTasks.length) {
    const empty = document.createElement("li");
    empty.className = "task-empty";
    empty.textContent = "Nothing planned yet.";
    taskList.appendChild(empty);
    return;
  }

  for (const task of dayTasks) {
    const meta = iconMeta(task.icon || "general");
    const li = document.createElement("li");
    const expanded = expandedTaskId === task.id;
    li.className = `task-item${task.done ? " is-done" : ""}${expanded ? " is-expanded" : ""}`;
    li.dataset.id = String(task.id);

    const check = document.createElement("button");
    check.type = "button";
    check.className = "task-check";
    check.setAttribute("aria-label", task.done ? "Mark incomplete" : "Mark complete");
    check.textContent = task.done ? "✓" : "";
    check.addEventListener("click", () => toggleTask(task.id, !task.done));

    const icon = document.createElement("span");
    icon.className = "task-icon";
    icon.title = meta.label;
    icon.innerHTML = iconMarkup(meta.glyph);

    const main = document.createElement("div");
    main.className = "task-main";
    if (task.start_time) {
      const time = document.createElement("span");
      time.className = "task-time-label";
      time.textContent = formatTimeLabel(task.start_time);
      main.appendChild(time);
    }
    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;
    main.appendChild(title);
    if (task.notes) {
      const preview = document.createElement("span");
      preview.className = "task-notes-preview";
      preview.textContent = task.notes;
      main.appendChild(preview);
    }

    const edit = document.createElement("button");
    edit.type = "button";
    edit.className = "task-edit";
    edit.setAttribute("aria-label", expanded ? "Close editor" : "Edit details");
    edit.textContent = expanded ? "▾" : "✎";
    edit.addEventListener("click", () => {
      expandedTaskId = expanded ? null : task.id;
      renderTasks();
    });

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "task-remove";
    remove.setAttribute("aria-label", "Remove task");
    remove.textContent = "×";
    remove.addEventListener("click", () => removeTask(task.id));

    li.append(check, icon, main, edit, remove);

    if (expanded) {
      const editor = document.createElement("div");
      editor.className = "task-editor";

      const heading = document.createElement("p");
      heading.className = "task-editor-heading";
      heading.textContent = meta.editorTitle;

      const row = document.createElement("div");
      row.className = "task-editor-row";

      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.value = task.title;
      titleInput.maxLength = 240;
      titleInput.placeholder = meta.titleHint;

      const timeInput = document.createElement("input");
      timeInput.type = "time";
      timeInput.value = task.start_time || "";
      timeInput.title = "Appointment time";

      row.append(titleInput, timeInput);

      const notesLabel = document.createElement("label");
      notesLabel.className = "field-label";
      notesLabel.textContent = meta.detailLabel;

      const notesInput = document.createElement("textarea");
      notesInput.rows = 3;
      notesInput.maxLength = 2000;
      notesInput.value = task.notes || "";
      notesInput.placeholder = meta.detail;

      const save = document.createElement("button");
      save.type = "button";
      save.className = "task-editor-save";
      save.textContent = "Save details";
      save.addEventListener("click", async () => {
        await updateTaskDetails(task.id, {
          title: titleInput.value,
          start_time: timeInput.value || null,
          notes: notesInput.value,
        });
        expandedTaskId = null;
      });

      editor.append(heading, row, notesLabel, notesInput, save);
      li.appendChild(editor);
    }

    taskList.appendChild(li);
  }
}

function renderAppointments() {
  if (!appointmentsGrid) return;
  appointmentsGrid.innerHTML = "";
  if (!monthAppointments.length) {
    const empty = document.createElement("p");
    empty.className = "appointments-empty";
    empty.textContent = "No appointments or plans this month yet.";
    appointmentsGrid.appendChild(empty);
    return;
  }

  for (const item of monthAppointments) {
    const meta = iconMeta(item.icon || "general");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `appointment-row${item.done ? " is-done" : ""}`;
    btn.addEventListener("click", () => openDay(item.date));

    const date = document.createElement("span");
    date.className = "appointment-date";
    date.textContent = formatShortDate(item.date);

    const time = document.createElement("span");
    time.className = "appointment-time";
    time.textContent = item.start_time ? formatTimeLabel(item.start_time) : "—";

    const icon = document.createElement("span");
    icon.className = "appointment-icon";
    icon.title = meta.label;
    icon.innerHTML = iconMarkup(meta.glyph, 16);

    const body = document.createElement("span");
    body.className = "appointment-body";
    const title = document.createElement("span");
    title.className = "appointment-title";
    title.textContent = item.title;
    body.appendChild(title);
    if (item.notes) {
      const notes = document.createElement("span");
      notes.className = "appointment-notes";
      notes.textContent = item.notes;
      body.appendChild(notes);
    }

    btn.append(date, time, icon, body);
    appointmentsGrid.appendChild(btn);
  }
}

async function loadAppointments() {
  monthAppointments = [];
  renderAppointments();
  const key = `${viewYear}-${pad(viewMonth + 1)}`;
  try {
    const res = await fetch(`/api/appointments?month=${key}`);
    if (!res.ok) return;
    const data = await res.json();
    monthAppointments = data.appointments || [];
    renderAppointments();
  } catch (_) {
    /* keep empty */
  }
}

async function loadTasks(iso) {
  dayTasks = [];
  renderTasks();
  try {
    const res = await fetch(`/api/tasks/${iso}`);
    if (!res.ok) return;
    const data = await res.json();
    dayTasks = data.tasks || [];
    renderTasks();
    syncDayIconsFromTasks(iso, dayTasks);
    renderCalendar();
  } catch (_) {
    /* keep empty list */
  }
}

async function addTask(title) {
  if (!selectedDate || !title.trim()) return;
  try {
    const res = await fetch(`/api/tasks/${selectedDate}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title.trim(),
        icon: selectedIcon,
        start_time: taskTime?.value || null,
        notes: taskNotes?.value || "",
      }),
    });
    if (!res.ok) throw new Error("add failed");
    const task = await res.json();
    dayTasks.push(task);
    dayTasks.sort((a, b) => {
      const at = a.start_time || "99:99";
      const bt = b.start_time || "99:99";
      if (at !== bt) return at.localeCompare(bt);
      return (a.sort_order || 0) - (b.sort_order || 0);
    });
    syncDayIconsFromTasks(selectedDate, dayTasks);
    renderTasks();
    renderCalendar();
    await loadAppointments();
  } catch (_) {
    saveStatus.textContent = "Could not add plan.";
  }
}

async function toggleTask(id, done) {
  try {
    const res = await fetch(`/api/tasks/item/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done }),
    });
    if (!res.ok) throw new Error("toggle failed");
    const updated = await res.json();
    dayTasks = dayTasks.map((t) => (t.id === id ? updated : t));
    renderTasks();
    await loadAppointments();
  } catch (_) {
    saveStatus.textContent = "Could not update plan.";
  }
}

async function updateTaskDetails(id, fields) {
  try {
    const res = await fetch(`/api/tasks/item/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    if (!res.ok) throw new Error("update failed");
    const updated = await res.json();
    dayTasks = dayTasks.map((t) => (t.id === id ? updated : t));
    dayTasks.sort((a, b) => {
      const at = a.start_time || "99:99";
      const bt = b.start_time || "99:99";
      if (at !== bt) return at.localeCompare(bt);
      return (a.sort_order || 0) - (b.sort_order || 0);
    });
    if (selectedDate) syncDayIconsFromTasks(selectedDate, dayTasks);
    renderTasks();
    renderCalendar();
    await loadAppointments();
  } catch (_) {
    saveStatus.textContent = "Could not save details.";
  }
}

async function removeTask(id) {
  try {
    const res = await fetch(`/api/tasks/item/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("delete failed");
    dayTasks = dayTasks.filter((t) => t.id !== id);
    if (expandedTaskId === id) expandedTaskId = null;
    if (selectedDate) syncDayIconsFromTasks(selectedDate, dayTasks);
    renderTasks();
    renderCalendar();
    await loadAppointments();
  } catch (_) {
    saveStatus.textContent = "Could not remove plan.";
  }
}

async function refreshCalendar() {
  await Promise.all([loadMonthMarkers(), loadAppointments()]);
  renderCalendar();
}

async function openDay(iso) {
  selectedDate = iso;
  renderCalendar();
  clearRevealTimers();

  const quote = pickQuote();
  const butterfly = pickButterfly();
  butterfly._flower = pickFlower(iso, butterfly);
  butterfly._landIso = iso;
  renderButterfly(butterfly);

  const traits = butterfly._flight || null;
  const flightMs = Math.round(((traits && traits.flightSec) || REVEAL.flightSec) * 1000);
  const delayMs = Math.round(((traits && traits.delay) || 0) * 1000);
  const quoteAtMs = delayMs + flightMs + 200;
  const sheetAtMs = quoteAtMs + 4200;

  quoteText.textContent = `“${quote.text}”`;
  quoteAuthor.textContent = `— ${quote.author}`;
  if (kindnessText) {
    kindnessText.textContent = pickKindnessIdea();
  }
  journalDate.textContent = formatDisplayDate(iso);
  journalBody.value = "";
  saveStatus.textContent = "";
  dayTasks = [];
  renderTasks();
  selectedIcon = "general";
  expandedTaskId = null;
  renderIconPicker();
  syncIconEditor();
  taskInput.value = "";
  if (taskTime) taskTime.value = "";
  if (taskNotes) taskNotes.value = "";

  overlay.hidden = false;
  overlay.classList.remove("is-open", "is-revealing", "is-quoting", "is-sheet");
  overlay.style.setProperty("--flight-duration", `${(delayMs + flightMs) / 1000}s`);
  // force reflow so animations restart
  void overlay.offsetWidth;
  overlay.classList.add("is-open", "is-revealing");

  revealTimers.push(
    setTimeout(() => overlay.classList.add("is-quoting"), quoteAtMs),
    setTimeout(() => overlay.classList.add("is-sheet"), sheetAtMs)
  );

  try {
    const [entryRes] = await Promise.all([
      fetch(`/api/entries/${iso}`),
      loadTasks(iso),
    ]);
    if (entryRes.ok) {
      const data = await entryRes.json();
      journalBody.value = data.content || "";
    }
  } catch (_) {
    saveStatus.textContent = "Could not load this day.";
  }

  // Focus planner after the sheet is visible
  revealTimers.push(
    setTimeout(() => taskInput.focus({ preventScroll: true }), sheetAtMs + 200)
  );
}

function closeDay() {
  clearRevealTimers();
  stopDictation();
  if (butterfly3d) {
    butterfly3d.destroy();
    butterfly3d = null;
  }
  butterflyHost.classList.remove("butterfly-host--3d");
  overlay.classList.remove("is-open", "is-revealing", "is-quoting", "is-sheet");
  overlay.hidden = true;
  selectedDate = null;
  renderCalendar();
}

async function saveEntry() {
  if (!selectedDate) return;
  saveStatus.textContent = "Saving…";
  saveBtn.disabled = true;

  try {
    const res = await fetch(`/api/entries/${selectedDate}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: journalBody.value }),
    });
    if (!res.ok) throw new Error("save failed");
    const data = await res.json();
    if (data.has_entry) entryDates.add(selectedDate);
    else entryDates.delete(selectedDate);
    saveStatus.textContent = "Saved";
    renderCalendar();
  } catch (_) {
    saveStatus.textContent = "Save failed — try again.";
  } finally {
    saveBtn.disabled = false;
  }
}

function scheduleAutosave() {
  saveStatus.textContent = "Editing…";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveEntry, 900);
}

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
let dictation = null;
let dictationListening = false;

function setDictationUi(listening, message = "") {
  dictationListening = listening;
  if (dictationBtn) {
    dictationBtn.setAttribute("aria-pressed", listening ? "true" : "false");
    dictationBtn.title = listening ? "Stop dictation" : "Dictate";
    dictationBtn.setAttribute(
      "aria-label",
      listening ? "Stop dictation" : "Dictate journal entry"
    );
  }
  if (dictationStatus) {
    dictationStatus.textContent = message;
  }
}

function appendDictation(text) {
  const chunk = String(text || "").trim();
  if (!chunk || !journalBody) return;
  const cur = journalBody.value;
  const needsSpace = cur && !/\s$/.test(cur);
  journalBody.value = cur + (needsSpace ? " " : "") + chunk;
  journalBody.dispatchEvent(new Event("input", { bubbles: true }));
}

function stopDictation(message = "") {
  if (dictation && dictationListening) {
    try {
      dictation.stop();
    } catch (_) {
      /* already stopped */
    }
  }
  setDictationUi(false, message);
}

function startDictation() {
  if (!SpeechRecognitionAPI || !dictationBtn) return;
  if (!dictation) {
    dictation = new SpeechRecognitionAPI();
    dictation.continuous = true;
    dictation.interimResults = true;
    dictation.lang = navigator.language || "en-US";

    dictation.onstart = () => {
      setDictationUi(true, "Listening…");
    };

    dictation.onresult = (event) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const piece = result[0].transcript;
        if (result.isFinal) {
          appendDictation(piece);
          if (dictationStatus) dictationStatus.textContent = "Listening…";
        } else {
          interim += piece;
        }
      }
      if (interim && dictationStatus) {
        dictationStatus.textContent = interim;
      }
    };

    dictation.onerror = (event) => {
      const err = event.error || "error";
      if (err === "not-allowed" || err === "service-not-allowed") {
        setDictationUi(false, "Microphone permission is needed for dictation.");
      } else if (err === "no-speech") {
        setDictationUi(false, "No speech heard — tap the mic to try again.");
      } else if (err === "aborted") {
        setDictationUi(false, "");
      } else {
        setDictationUi(false, "Dictation stopped.");
      }
    };

    dictation.onend = () => {
      // Chrome ends after pauses even with continuous — restart if still toggled on
      if (dictationListening) {
        try {
          dictation.start();
          return;
        } catch (_) {
          /* fall through */
        }
      }
      setDictationUi(false, dictationStatus?.textContent === "Listening…" ? "" : dictationStatus?.textContent || "");
    };
  }

  try {
    dictation.start();
    setDictationUi(true, "Listening…");
  } catch (_) {
    setDictationUi(false, "Could not start dictation.");
  }
}

function toggleDictation() {
  if (dictationListening) stopDictation();
  else startDictation();
}

if (dictationBtn) {
  if (!SpeechRecognitionAPI) {
    dictationBtn.hidden = true;
    if (dictationStatus) {
      dictationStatus.textContent = "";
    }
  } else {
    dictationBtn.addEventListener("click", toggleDictation);
  }
}

prevBtn.addEventListener("click", async () => {
  viewMonth -= 1;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear -= 1;
  }
  await refreshCalendar();
});

nextBtn.addEventListener("click", async () => {
  viewMonth += 1;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear += 1;
  }
  await refreshCalendar();
});

closeBtn.addEventListener("click", closeDay);
backdrop.addEventListener("click", closeDay);
saveBtn.addEventListener("click", saveEntry);
journalBody.addEventListener("input", scheduleAutosave);

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = taskInput.value;
  taskInput.value = "";
  await addTask(title);
  if (taskTime) taskTime.value = "";
  if (taskNotes) taskNotes.value = "";
  syncIconEditor();
  taskInput.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.hidden) closeDay();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/static/sw.js").catch(() => {
      /* offline shell is optional */
    });
  });
}

renderIconPicker();
refreshCalendar();
