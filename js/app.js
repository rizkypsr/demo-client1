/**
 * Mobile-Only Trip Information Web App
 * Focused purely on Travel Itinerary, Destinations, and Tour Information
 * Lightweight, Vanilla JavaScript, Zero Dependencies
 */

// Fallback dataset in case fetch is blocked by file:// CORS during offline presentation
const FALLBACK_EVENT_DATA = {
  "event": {
    "title": "Exclusive Bali Cultural & Island Tour 2026",
    "destination": "Bali, Indonesia",
    "dates": "24 - 26 Oktober 2026",
    "theme": "Explore the Beauty, Create Unforgettable Memories",
    "announcement": "Kumpul di Bandara Soekarno-Hatta Terminal 3 (Gate 4) paling lambat pukul 05:30 WIB."
  },
  "destinasi_populer": [
    { "nama": "Pantai Jimbaran", "kategori": "Sunset & Seafood Dinner", "icon": "🌅" },
    { "nama": "GWK Cultural Park", "kategori": "Wisata Budaya & Landmark", "icon": "🗿" },
    { "nama": "Pantai Melasti", "kategori": "Tebing Eksotis & Pasir Putih", "icon": "🏖️" },
    { "nama": "Desa Penglipuran", "kategori": "Desa Terbersih & Alam", "icon": "🌿" }
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "date": "Jumat, 24 Oktober 2026",
      "title": "Kedatangan & Eksplorasi Bali Selatan",
      "dresscode": "Polo Shirt Biru + Celana Santai",
      "schedule": [
        {
          "time": "05:30 - 06:30",
          "title": "Kumpul di Bandara Soekarno-Hatta (CGK)",
          "location": "Terminal 3 Gate 4, Jakarta",
          "desc": "Registrasi kehadiran fisik peserta, pembagian boarding pass, bagasi tag, dan snack box sarapan.",
          "icon": "🛫"
        },
        {
          "time": "07:30 - 10:20",
          "title": "Penerbangan Jakarta ➔ Bali",
          "location": "Garuda Indonesia GA-404",
          "desc": "Terbang menuju Bandara Internasional I Gusti Ngurah Rai (DPS).",
          "icon": "✈️"
        },
        {
          "time": "11:00 - 13:00",
          "title": "Welcome Lunch Khas Bali",
          "location": "Bebek Tepi Sawah, Tuban",
          "desc": "Makan siang kuliner khas Bali dan pengarahan singkat seputar rangkaian tour.",
          "icon": "🍽️"
        },
        {
          "time": "13:30 - 15:30",
          "title": "Wisata Budaya GWK Cultural Park",
          "location": "Ungasan, Kuta Selatan",
          "desc": "Mengunjungi patung megah Garuda Wisnu Kencana, spot foto panorama tebing kapur dan pertunjukan seni.",
          "icon": "🗿"
        },
        {
          "time": "16:00 - 17:30",
          "title": "Check-in Hotel & Refreshment",
          "location": "The Westin Resort Nusa Dua",
          "desc": "Pembagian kunci kamar, istirahat dan persiapan makan malam santai di tepi pantai.",
          "icon": "🏨"
        },
        {
          "time": "18:00 - 20:30",
          "title": "Sunset Dinner di Jimbaran Bay",
          "location": "Jimbaran Beach Front",
          "desc": "Menikmati makan malam hidangan laut segar saat matahari terbenam dengan iringan live acoustic.",
          "icon": "🌅"
        }
      ]
    },
    {
      "day": "Day 2",
      "date": "Sabtu, 25 Oktober 2026",
      "title": "Pantai Eksotis & Malam Kebersamaan",
      "dresscode": "Kaos Tim Divisi + Sepatu Santai / Kets",
      "schedule": [
        {
          "time": "06:30 - 08:00",
          "title": "Sarapan Pagi Buffet",
          "location": "Seasonal Tastes Restaurant (Westin)",
          "desc": "Sarapan menu internasional di resort untuk mengisi energi petualangan hari kedua.",
          "icon": "☕"
        },
        {
          "time": "08:30 - 12:00",
          "title": "Eksplorasi Pantai Melasti & Fun Activity",
          "location": "Pantai Melasti, Ungasan",
          "desc": "Menikmati keindahan tebing kapur berkelok, pasir putih bersih, foto bersama, dan permainan pantai seru.",
          "icon": "🏖️"
        },
        {
          "time": "12:30 - 14:00",
          "title": "Makan Siang & Kelapa Muda Segar",
          "location": "Local Coastal Bistro, Ungasan",
          "desc": "Santap siang santai dengan pemandangan langsung ke Samudera Hindia.",
          "icon": "🥥"
        },
        {
          "time": "15:00 - 17:30",
          "title": "Waktu Luang di Resort / Spa",
          "location": "The Westin Nusa Dua Area",
          "desc": "Waktu bebas menikmati pantai privat hotel, kolam renang laguna, atau beristirahat.",
          "icon": "🌴"
        },
        {
          "time": "18:30 - 22:00",
          "title": "Gala Dinner & Celebration Night",
          "location": "Grand Ballroom The Westin",
          "desc": "Malam puncak apresiasi, santap malam eksklusif, pertunjukan musik, dan pembagian doorprize.",
          "icon": "🎉"
        }
      ]
    },
    {
      "day": "Day 3",
      "date": "Minggu, 26 Oktober 2026",
      "title": "Wisata Oleh-oleh & Kepulangan",
      "dresscode": "Pakaian Santai / Casual Bebas",
      "schedule": [
        {
          "time": "07:00 - 09:30",
          "title": "Sarapan Pagi & Morning Walk",
          "location": "Nusa Dua Beach Pathway",
          "desc": "Jalan pagi santai menikmati udara segar pantai dan sarapan terakhir di resort.",
          "icon": "🍳"
        },
        {
          "time": "10:30 - 11:30",
          "title": "Check-out Hotel & Muat Bagasi Bus",
          "location": "Lobby The Westin",
          "desc": "Pengumpulan kunci kamar dan penitipan koper ke dalam bagasi bus masing-masing divisi.",
          "icon": "🧳"
        },
        {
          "time": "12:00 - 15:00",
          "title": "Belanja Oleh-oleh Khas Bali & Lunch",
          "location": "Krisna Oleh-oleh Bali & Resto",
          "desc": "Waktu belanja pie susu, kacang disco, kain pantai, dan cinderamata khas Bali dilanjutkan makan siang.",
          "icon": "🛍️"
        },
        {
          "time": "16:00 - 17:30",
          "title": "Menuju Bandara Ngurah Rai (DPS)",
          "location": "Terminal Keberangkatan Domestik",
          "desc": "Proses check-in tiket pesawat kepulangan dan drop bagasi.",
          "icon": "🚌"
        },
        {
          "time": "19:00 - 20:00",
          "title": "Penerbangan Bali ➔ Jakarta",
          "location": "Garuda Indonesia GA-419",
          "desc": "Mendarat kembali di Bandara Soekarno-Hatta (CGK). Terima kasih telah bergabung dalam perjalanan ini!",
          "icon": "✈️"
        }
      ]
    }
  ],
  "tips_travel": [
    "Bawa kartu identitas (KTP / Passport) asli untuk tiket penerbangan.",
    "Siapkan pakaian ganti santai, topi pantai, kacamata hitam, dan sunscreen.",
    "Bawa obat-obatan pribadi yang dibutuhkan secara khusus.",
    "Pastikan baterai smartphone terisi penuh untuk dokumentasi momen perjalanan."
  ]
};

// Global State
let AppData = FALLBACK_EVENT_DATA;
let currentParticipant = null;
let activeDayIndex = 0;

// Storage Keys
const STORAGE_PARTICIPANT_KEY = "trip_demo_participant";
const STORAGE_ALL_PARTICIPANTS_KEY = "trip_demo_all_participants";

// Elements
const registrationView = document.getElementById("registration-view");
const mainViewsWrapper = document.getElementById("main-views-wrapper");
const regForm = document.getElementById("registration-form");
const toastEl = document.getElementById("toast-message");

// Initialize Application
document.addEventListener("DOMContentLoaded", async () => {
  await loadEventData();
  checkAuth();
  bindEvents();
});

// Load event data from JSON file with fallback
async function loadEventData() {
  try {
    const response = await fetch("data/event-data.json");
    if (response.ok) {
      AppData = await response.json();
    }
  } catch (err) {
    console.warn("Menggunakan fallback data offline:", err);
  }
}

// Check if user is already registered in localStorage
function checkAuth() {
  const savedData = localStorage.getItem(STORAGE_PARTICIPANT_KEY);
  if (savedData) {
    try {
      currentParticipant = JSON.parse(savedData);
      showMainApp();
      return;
    } catch (e) {
      localStorage.removeItem(STORAGE_PARTICIPANT_KEY);
    }
  }
  showRegistration();
}

function showRegistration() {
  registrationView.style.display = "block";
  mainViewsWrapper.style.display = "none";
}

function showMainApp() {
  registrationView.style.display = "none";
  mainViewsWrapper.style.display = "block";
  
  renderUserProfile();
  renderDestinations();
  renderItinerary(activeDayIndex);
  renderTips();
}

// Render User Greeting & Card
function renderUserProfile() {
  const userNameEl = document.getElementById("user-display-name");
  const userDeptEl = document.getElementById("user-display-dept");
  const userPhoneEl = document.getElementById("user-display-phone");
  
  if (!currentParticipant) return;

  userNameEl.textContent = currentParticipant.nama;
  userDeptEl.textContent = currentParticipant.departemen;
  userPhoneEl.textContent = currentParticipant.nohp;
}

// Render Highlights Destinasi Wisata
function renderDestinations() {
  const container = document.getElementById("destinasi-list-container");
  if (!container || !AppData.destinasi_populer) return;

  container.innerHTML = AppData.destinasi_populer.map(d => `
    <div class="destinasi-card">
      <div class="destinasi-icon">${d.icon}</div>
      <div class="destinasi-name">${d.nama}</div>
      <div class="destinasi-kategori">${d.kategori}</div>
    </div>
  `).join("");
}

// Render Itinerary Timeline
function renderItinerary(dayIdx) {
  activeDayIndex = dayIdx;
  const dayTabsContainer = document.getElementById("itinerary-day-tabs");
  const timelineContainer = document.getElementById("itinerary-timeline-container");
  const dresscodeEl = document.getElementById("itinerary-dresscode");
  const daySummaryEl = document.getElementById("day-summary-box");

  if (!dayTabsContainer || !timelineContainer) return;

  // Render Day Tabs (Day 1, Day 2, Day 3)
  dayTabsContainer.innerHTML = AppData.itinerary.map((d, idx) => `
    <button class="day-tab-btn ${idx === dayIdx ? 'active' : ''}" onclick="changeDay(${idx})">
      ${d.day}
    </button>
  `).join("");

  const selectedDay = AppData.itinerary[dayIdx];
  if (!selectedDay) return;

  // Day title and date
  if (daySummaryEl) {
    daySummaryEl.innerHTML = `📌 <span>${selectedDay.date}</span> — <span style="color:#2563eb;">${selectedDay.title}</span>`;
  }

  // Dresscode notice
  if (dresscodeEl) {
    dresscodeEl.innerHTML = `<strong>Dresscode:</strong> ${selectedDay.dresscode}`;
  }

  // Schedule Timeline
  timelineContainer.innerHTML = selectedDay.schedule.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-time">${item.icon || '⏰'} ${item.time}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-location">📍 ${item.location}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>
    </div>
  `).join("");
}

window.changeDay = function(idx) {
  renderItinerary(idx);
};

// Render Tips Perlengkapan Travel
function renderTips() {
  const container = document.getElementById("tips-travel-container");
  if (!container || !AppData.tips_travel) return;

  container.innerHTML = AppData.tips_travel.map(tip => `
    <div class="guideline-item">
      <span style="font-size:14px;">✅</span>
      <div>${tip}</div>
    </div>
  `).join("");
}

// Form submission handler
function bindEvents() {
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const nama = document.getElementById("reg-name").value.trim();
      const departemen = document.getElementById("reg-dept").value.trim();
      const nohp = document.getElementById("reg-phone").value.trim();

      if (!nama || !departemen || !nohp) {
        alert("Mohon lengkapi Nama, Departemen, dan No HP Anda.");
        return;
      }

      const participant = {
        id: "usr-" + Date.now().toString(36),
        nama: nama,
        departemen: departemen,
        nohp: nohp,
        registeredAt: new Date().toLocaleString("id-ID")
      };

      currentParticipant = participant;
      localStorage.setItem(STORAGE_PARTICIPANT_KEY, JSON.stringify(participant));

      // Append to all participants history
      syncParticipantRecord(participant);

      showToast(`Selamat datang, ${nama}!`);
      showMainApp();
    });
  }

  // Quick fill button for fast client demo
  const quickFillBtn = document.getElementById("btn-quick-demo");
  if (quickFillBtn) {
    quickFillBtn.addEventListener("click", () => {
      document.getElementById("reg-name").value = "Andi Wijaya";
      document.getElementById("reg-dept").value = "Engineering & Technology";
      document.getElementById("reg-phone").value = "081298765432";
      showToast("Data demo terisi otomatis!");
    });
  }
}

// Sync participant to all-participants database in localStorage
function syncParticipantRecord(participant) {
  try {
    let all = JSON.parse(localStorage.getItem(STORAGE_ALL_PARTICIPANTS_KEY) || "[]");
    const existingIndex = all.findIndex(p => p.nohp === participant.nohp || p.id === participant.id);
    if (existingIndex >= 0) {
      all[existingIndex] = participant;
    } else {
      all.push(participant);
    }
    localStorage.setItem(STORAGE_ALL_PARTICIPANTS_KEY, JSON.stringify(all));
  } catch (e) {
    console.error("Gagal sinkron data peserta", e);
  }
}

// Reset Demo / Ganti Peserta untuk mengulang presentasi ke client
window.resetDemo = function() {
  if (confirm("Reset sesi demo? Anda akan kembali ke halaman registrasi peserta.")) {
    localStorage.removeItem(STORAGE_PARTICIPANT_KEY);
    currentParticipant = null;
    showRegistration();
    if (regForm) regForm.reset();
    showToast("Sesi demo berhasil di-reset.");
  }
};

// Toast message helper
function showToast(text) {
  if (!toastEl) return;
  toastEl.textContent = text;
  toastEl.classList.add("show");
  setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2600);
}
