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

/** Distinct butterfly looks — rotated on each day open. */
const BUTTERFLIES = [
  {
    id: "aurora",
    left: ["#7ec8e3", "#c9a0dc", "#f7a8c8"],
    right: ["#8fd3c8", "#a8d5e5", "#e8b4d4"],
    spots: "#fff8",
    body: "#2d2a26",
    shape: "classic",
    theme: {
      a: "#e8f4ff",
      b: "#f3e8ff",
      c: "#ffe8f3",
      accent: "#7b6bb5",
      ink: "#2a2540",
    },
  },
  {
    id: "monarch",
    left: ["#f4a261", "#e76f51", "#f4d35e"],
    right: ["#e9c46a", "#f4a261", "#e76f51"],
    spots: "#fff6",
    body: "#3d2914",
    shape: "tall",
    theme: {
      a: "#fff4e6",
      b: "#ffe0c2",
      c: "#ffd6a8",
      accent: "#c45c26",
      ink: "#3d2914",
    },
  },
  {
    id: "jade",
    left: ["#52b788", "#95d5b2", "#2d6a4f"],
    right: ["#74c69d", "#d8f3dc", "#40916c"],
    spots: "#e8fff0",
    body: "#1b4332",
    shape: "round",
    theme: {
      a: "#e8f8ef",
      b: "#d4f0e0",
      c: "#c6e9d6",
      accent: "#2d6a4f",
      ink: "#1b4332",
    },
  },
  {
    id: "violet",
    left: ["#7b2cbf", "#c77dff", "#e0aaff"],
    right: ["#9d4edd", "#c77dff", "#5a189a"],
    spots: "#fff8",
    body: "#240046",
    shape: "classic",
    theme: {
      a: "#f4e9ff",
      b: "#e7d4ff",
      c: "#f8e8ff",
      accent: "#7b2cbf",
      ink: "#2a1248",
    },
  },
  {
    id: "sky",
    left: ["#48cae4", "#90e0ef", "#00b4d8"],
    right: ["#ade8f4", "#48cae4", "#0077b6"],
    spots: "#ffffffcc",
    body: "#023e8a",
    shape: "wide",
    theme: {
      a: "#e6f8ff",
      b: "#d2f1fb",
      c: "#c5ebf8",
      accent: "#0077b6",
      ink: "#023e8a",
    },
  },
  {
    id: "sunset",
    left: ["#ff6b6b", "#ffd166", "#ef476f"],
    right: ["#f9844a", "#ffd166", "#ff6b6b"],
    spots: "#fff8e7",
    body: "#3d1f1f",
    shape: "tall",
    theme: {
      a: "#ffe9e4",
      b: "#ffd9c8",
      c: "#ffe6b8",
      accent: "#d64b5a",
      ink: "#3d1f1f",
    },
  },
  {
    id: "peacock",
    left: ["#1d3557", "#457b9d", "#a8dadc"],
    right: ["#1d3557", "#457b9d", "#f1faee"],
    spots: "#e9c46a",
    body: "#0b132b",
    shape: "round",
    style: "elaborate",
    pattern: "eyespots",
    vein: "#f1faeeaa",
    edge: "#e9c46a",
    theme: {
      a: "#e8f2f6",
      b: "#d5e7ef",
      c: "#eef6e8",
      accent: "#1d3557",
      ink: "#0b132b",
    },
  },
  {
    id: "glasswing",
    left: ["#caf0f8", "#90e0ef88", "#ade8f4"],
    right: ["#caf0f8", "#48cae488", "#ade8f4"],
    spots: "#ffffff55",
    body: "#415a77",
    shape: "wide",
    style: "elaborate",
    pattern: "glass",
    vein: "#415a77aa",
    edge: "#ffffff88",
    theme: {
      a: "#f2fbff",
      b: "#e8f6fb",
      c: "#eef4f8",
      accent: "#415a77",
      ink: "#2f3e4e",
    },
  },
  {
    id: "morpho",
    left: ["#023e8a", "#0077b6", "#48cae4"],
    right: ["#03045e", "#0077b6", "#90e0ef"],
    spots: "#caf0f8",
    body: "#012a4a",
    shape: "tall",
    style: "elaborate",
    pattern: "iridescent",
    vein: "#90e0ef99",
    edge: "#caf0f8",
    theme: {
      a: "#e4f3ff",
      b: "#cfe8ff",
      c: "#d9efff",
      accent: "#0077b6",
      ink: "#012a4a",
    },
  },
  {
    id: "painted-lady",
    left: ["#e76f51", "#f4a261", "#e9c46a"],
    right: ["#f4a261", "#e76f51", "#264653"],
    spots: "#264653",
    body: "#1b1b1b",
    shape: "classic",
    style: "elaborate",
    pattern: "mosaic",
    vein: "#1b1b1bcc",
    edge: "#f4a261",
    theme: {
      a: "#fff0e6",
      b: "#ffe3d1",
      c: "#fff5d9",
      accent: "#c45c26",
      ink: "#264653",
    },
  },
  {
    id: "luna",
    left: ["#d8f3dc", "#95d5b2", "#b7e4c7"],
    right: ["#d8f3dc", "#74c69d", "#b7e4c7"],
    spots: "#40916c",
    body: "#1b4332",
    shape: "swallowtail",
    style: "elaborate",
    pattern: "luna",
    vein: "#2d6a4f99",
    edge: "#95d5b2",
    theme: {
      a: "#eefaf1",
      b: "#dff3e5",
      c: "#e6f6ea",
      accent: "#40916c",
      ink: "#1b4332",
    },
  },
  {
    id: "crimson-lace",
    left: ["#9b2226", "#ae2012", "#bb3e03"],
    right: ["#9b2226", "#ca6702", "#bb3e03"],
    spots: "#ffddd2",
    body: "#370617",
    shape: "round",
    style: "elaborate",
    pattern: "lace",
    vein: "#ffddd2aa",
    edge: "#ffba08",
    theme: {
      a: "#ffe9e6",
      b: "#ffd7d0",
      c: "#ffe8cc",
      accent: "#9b2226",
      ink: "#370617",
    },
  },
  {
    id: "night-orchid",
    left: ["#3c096c", "#7b2cbf", "#c77dff"],
    right: ["#240046", "#9d4edd", "#e0aaff"],
    spots: "#ff9eed",
    body: "#10002b",
    shape: "tall",
    style: "elaborate",
    pattern: "eyespots",
    vein: "#e0aaff99",
    edge: "#ff9eed",
    theme: {
      a: "#f3e8ff",
      b: "#e8d4ff",
      c: "#fce7f8",
      accent: "#7b2cbf",
      ink: "#1a0a33",
    },
  },
];

const REVEAL = {
  quoteAtMs: 1400,
  sheetAtMs: 10000, // ~8.5s to read the quote after it appears
  flightSec: 2.4,
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
  const i = nextRotation("daywing-butterfly-rot-v4", BUTTERFLIES.length);
  return BUTTERFLIES[i];
}

function displayName(spec) {
  if (spec.name) return spec.name;
  return spec.id
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function wingPaths(shape) {
  if (shape === "tall") {
    return {
      left: "M58 54 C34 0, 2 18, 16 54 C2 78, 30 98, 58 62 Z",
      right: "M62 54 C86 0, 118 18, 104 54 C118 78, 90 98, 62 62 Z",
    };
  }
  if (shape === "round") {
    return {
      left: "M58 52 C38 18, 8 28, 20 52 C8 72, 34 82, 58 58 Z",
      right: "M62 52 C82 18, 112 28, 100 52 C112 72, 86 82, 62 58 Z",
    };
  }
  if (shape === "wide") {
    return {
      left: "M58 52 C28 22, -4 40, 14 56 C-2 74, 28 86, 58 58 Z",
      right: "M62 52 C92 22, 124 40, 106 56 C122 74, 92 86, 62 58 Z",
    };
  }
  if (shape === "swallowtail") {
    return {
      left: "M58 50 C32 8, 4 22, 16 48 C6 62, 10 78, 28 82 L18 96 L36 84 C48 78, 54 66, 58 56 Z",
      right: "M62 50 C88 8, 116 22, 104 48 C114 62, 110 78, 92 82 L102 96 L84 84 C72 78, 66 66, 62 56 Z",
    };
  }
  return {
    left: "M58 52 C30 10, 5 25, 18 52 C5 70, 28 88, 58 58 Z",
    right: "M62 52 C90 10, 115 25, 102 52 C115 70, 92 88, 62 58 Z",
  };
}

function elaborateDecor(side, spec, uid) {
  const isLeft = side === "left";
  const x = (n) => (isLeft ? n : 120 - n);
  const vein = spec.vein || "#ffffff88";
  const edge = spec.edge || "#ffffffaa";
  const spots = spec.spots || "#fff8";
  const pattern = spec.pattern || "eyespots";

  const veins = `
    <path d="M${x(58)} 52 Q${x(36)} 40 ${x(22)} 28" fill="none" stroke="${vein}" stroke-width="1.1" />
    <path d="M${x(58)} 54 Q${x(34)} 54 ${x(16)} 56" fill="none" stroke="${vein}" stroke-width="1.1" />
    <path d="M${x(58)} 56 Q${x(38)} 68 ${x(24)} 80" fill="none" stroke="${vein}" stroke-width="1.1" />
    <path d="M${x(40)} 36 Q${x(28)} 48 ${x(30)} 66" fill="none" stroke="${vein}" stroke-width="0.8" opacity="0.7" />
  `;

  if (pattern === "eyespots") {
    return `
      ${veins}
      <circle cx="${x(26)}" cy="40" r="9" fill="${spots}" opacity="0.95" />
      <circle cx="${x(26)}" cy="40" r="5.5" fill="#111111" />
      <circle cx="${x(26)}" cy="40" r="2.2" fill="#fff8e7" />
      <circle cx="${x(36)}" cy="64" r="6" fill="${spots}" opacity="0.85" />
      <circle cx="${x(36)}" cy="64" r="3.2" fill="#222" />
      <circle cx="${x(18)}" cy="58" r="2.4" fill="${edge}" opacity="0.8" />
      <path d="M${x(54)} 48 Q${x(42)} 36 ${x(30)} 30" fill="none" stroke="${edge}" stroke-width="1.4" opacity="0.55" />
    `;
  }

  if (pattern === "banded") {
    return `
      ${veins}
      <path d="M${x(50)} 28 Q${x(28)} 42 ${x(20)} 70" fill="none" stroke="#111" stroke-width="5" opacity="0.55" />
      <path d="M${x(44)} 24 Q${x(22)} 44 ${x(18)} 76" fill="none" stroke="#111" stroke-width="3.2" opacity="0.4" />
      <circle cx="${x(24)}" cy="36" r="3.5" fill="${spots}" />
      <circle cx="${x(32)}" cy="70" r="2.8" fill="${spots}" />
      <circle cx="${x(18)}" cy="58" r="2" fill="${edge}" />
    `;
  }

  if (pattern === "glass") {
    return `
      ${veins}
      <path d="M${x(48)} 34 L${x(28)} 42 L${x(34)} 58 Z" fill="#ffffff33" stroke="${vein}" stroke-width="0.7" />
      <path d="M${x(36)} 48 L${x(20)} 54 L${x(28)} 70 Z" fill="#ffffff22" stroke="${vein}" stroke-width="0.7" />
      <circle cx="${x(30)}" cy="40" r="2" fill="${spots}" />
      <circle cx="${x(24)}" cy="62" r="1.6" fill="${edge}" />
    `;
  }

  if (pattern === "iridescent") {
    return `
      ${veins}
      <ellipse cx="${x(30)}" cy="44" rx="14" ry="10" fill="url(#${uid}-shine)" opacity="0.55" />
      <circle cx="${x(22)}" cy="36" r="3" fill="${spots}" opacity="0.85" />
      <circle cx="${x(34)}" cy="60" r="4" fill="${spots}" opacity="0.5" />
      <circle cx="${x(18)}" cy="58" r="2" fill="${edge}" />
      <path d="M${x(52)} 46 Q${x(38)} 30 ${x(22)} 26" fill="none" stroke="${edge}" stroke-width="1.2" opacity="0.5" />
    `;
  }

  if (pattern === "mosaic") {
    return `
      ${veins}
      <circle cx="${x(24)}" cy="34" r="3.2" fill="${spots}" />
      <circle cx="${x(34)}" cy="42" r="2.4" fill="${edge}" />
      <circle cx="${x(20)}" cy="50" r="2.8" fill="${spots}" />
      <circle cx="${x(32)}" cy="56" r="2.2" fill="#264653" />
      <circle cx="${x(26)}" cy="70" r="3" fill="${spots}" />
      <circle cx="${x(40)}" cy="66" r="2" fill="${edge}" />
      <path d="M${x(48)} 40 L${x(28)} 48 L${x(36)} 62" fill="none" stroke="#1b1b1b" stroke-width="1.1" opacity="0.55" />
    `;
  }

  if (pattern === "luna") {
    return `
      ${veins}
      <ellipse cx="${x(28)}" cy="46" rx="8" ry="11" fill="none" stroke="${spots}" stroke-width="2.2" opacity="0.85" />
      <ellipse cx="${x(28)}" cy="46" rx="3.5" ry="5" fill="${spots}" opacity="0.35" />
      <circle cx="${x(20)}" cy="34" r="1.8" fill="${edge}" />
      <circle cx="${x(34)}" cy="68" r="2.2" fill="${edge}" />
      <path d="M${x(52)} 50 Q${x(40)} 70 ${x(28)} 82" fill="none" stroke="${vein}" stroke-width="1.2" />
    `;
  }

  if (pattern === "lace") {
    return `
      ${veins}
      <path d="M${x(52)} 34 Q${x(34)} 28 ${x(20)} 36 Q${x(28)} 44 ${x(44)} 42 Z" fill="none" stroke="${edge}" stroke-width="1.3" opacity="0.8" />
      <path d="M${x(50)} 58 Q${x(32)} 52 ${x(18)} 62 Q${x(28)} 72 ${x(42)} 68 Z" fill="none" stroke="${edge}" stroke-width="1.2" opacity="0.75" />
      <circle cx="${x(26)}" cy="40" r="2.5" fill="${spots}" />
      <circle cx="${x(34)}" cy="62" r="2.2" fill="${spots}" />
      <circle cx="${x(18)}" cy="54" r="1.6" fill="${edge}" />
      <circle cx="${x(40)}" cy="48" r="1.4" fill="${edge}" />
    `;
  }

  return `
    ${veins}
    <circle cx="${x(28)}" cy="42" r="4" fill="${spots}" />
    <circle cx="${x(38)}" cy="58" r="3" fill="${spots}" />
  `;
}

function butterflySvg(spec, uid, sizeClass) {
  const paths = wingPaths(spec.shape);
  const [l0, l1, l2] = spec.left;
  const [r0, r1, r2] = spec.right;
  const elaborate = spec.style === "elaborate";

  const leftDecor = elaborate
    ? elaborateDecor("left", spec, uid)
    : `
      <circle cx="28" cy="42" r="4" fill="${spec.spots}" />
      <circle cx="38" cy="58" r="3" fill="${spec.spots}" />
    `;
  const rightDecor = elaborate
    ? elaborateDecor("right", spec, uid)
    : `
      <circle cx="92" cy="42" r="4" fill="${spec.spots}" />
      <circle cx="82" cy="58" r="3" fill="${spec.spots}" />
    `;

  return `
    <svg class="${sizeClass}" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="${uid}-L" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${l0}" />
          <stop offset="55%" stop-color="${l1}" />
          <stop offset="100%" stop-color="${l2}" />
        </linearGradient>
        <linearGradient id="${uid}-R" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${r0}" />
          <stop offset="55%" stop-color="${r1}" />
          <stop offset="100%" stop-color="${r2}" />
        </linearGradient>
        <radialGradient id="${uid}-shine" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#ffffffcc" />
          <stop offset="55%" stop-color="#90e0ef55" />
          <stop offset="100%" stop-color="#0077b600" />
        </radialGradient>
      </defs>
      <g class="wing wing-left">
        <path d="${paths.left}" fill="url(#${uid}-L)" />
        ${leftDecor}
      </g>
      <g class="wing wing-right">
        <path d="${paths.right}" fill="url(#${uid}-R)" />
        ${rightDecor}
      </g>
      <ellipse class="body" cx="60" cy="55" rx="3.5" ry="14" fill="${spec.body}" />
      <circle cx="60" cy="43" r="2.4" fill="${spec.body}" />
      <path class="antenna a1" d="M58 42 Q50 28 46 22" fill="none" stroke="${spec.body}" stroke-width="1.5" stroke-linecap="round" />
      <path class="antenna a2" d="M62 42 Q70 28 74 22" fill="none" stroke="${spec.body}" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="46" cy="22" r="1.4" fill="${spec.body}" />
      <circle cx="74" cy="22" r="1.4" fill="${spec.body}" />
    </svg>
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

function renderButterfly(spec) {
  const stamp = Date.now();
  const name = displayName(spec);
  const elaborate = spec.style === "elaborate";
  const sizeClass = elaborate ? "butterfly butterfly--fancy" : "butterfly";

  if (butterflyName) butterflyName.textContent = name;
  if (sheetButterflyLabel) sheetButterflyLabel.textContent = name;

  butterflyHost.innerHTML = butterflySvg(spec, `bf-${spec.id}-${stamp}`, sizeClass);
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
  renderButterfly(butterfly);

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
  overlay.style.setProperty("--flight-duration", `${REVEAL.flightSec}s`);
  // force reflow so animations restart
  void overlay.offsetWidth;
  overlay.classList.add("is-open", "is-revealing");

  revealTimers.push(
    setTimeout(() => overlay.classList.add("is-quoting"), REVEAL.quoteAtMs),
    setTimeout(() => overlay.classList.add("is-sheet"), REVEAL.sheetAtMs)
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
    setTimeout(() => taskInput.focus({ preventScroll: true }), REVEAL.sheetAtMs + 200)
  );
}

function closeDay() {
  clearRevealTimers();
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
