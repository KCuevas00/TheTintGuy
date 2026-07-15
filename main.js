/* =============================================
   THE TINT GUY — main.js
   Services data + UI interactions
   ============================================= */

// ---- SOCIAL LINKS ----
// Used across the site for "BOOK NOW" buttons
const SOCIALS = {
  tiktok: "https://www.tiktok.com/@thetintguy27?_r=1&_t=ZT-983FbPUpHvJ",
  instagram: "https://www.instagram.com/thetintguy_corp_29?igsh=MXBnZnM0aGI4ODA4Mg==",
  telegram: "https://t.me/thetintguy_27",
  snapchat: "https://www.snapchat.com/add/the.tintguy?share_id=hZwJ2rEOslA&locale=en-US",
  whatsapp: "https://wa.me/18159058424",
  phone: "8159058424"
};

// ---- SERVICES DATA ----
const products = [
  {
    id: 1,
    name: "Window Tint",
    description: "Full vehicle or residential/commercial tint",
    category: "tint",
    badge: "POPULAR",
    badgeClass: "",
    emoji: "🚙"
  },
  {
    id: 2,
    name: "Sound System Install",
    description: "Custom audio builds, subs & amps",
    category: "audio",
    badge: "BEST SELLER",
    badgeClass: "",
    emoji: "🔊"
  },
  {
    id: 3,
    name: "Starlight Headliner",
    description: "Fiber-optic star ceiling install",
    category: "interior",
    badge: "NEW",
    badgeClass: "blue",
    emoji: "✨"
  },
  {
    id: 4,
    name: "Interior Ambient Lighting",
    description: "Multi-color LED interior lighting",
    category: "interior",
    badge: null,
    badgeClass: "",
    emoji: "💡"
  },
  {
    id: 5,
    name: "Rock Lights",
    description: "Underbody LED rock light kits",
    category: "interior",
    badge: null,
    badgeClass: "",
    emoji: "🔦"
  },
  {
    id: 6,
    name: "Vehicle Wrap",
    description: "Full or partial color change wraps",
    category: "wrap",
    badge: "POPULAR",
    badgeClass: "",
    emoji: "🚘"
  },
  {
    id: 7,
    name: "Mechanic Services",
    description: "General repair & maintenance work",
    category: "mechanic",
    badge: null,
    badgeClass: "",
    emoji: "🔧"
  }
];

let currentFilter = 'all';

// ---- RENDER SERVICES ----
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-category="${p.category}">
      <div class="product-img">
        <span>${p.emoji}</span>
        ${p.badge ? `<div class="product-badge ${p.badgeClass}">${p.badge}</div>` : ''}
        <div class="product-overlay">
          <a href="contact.html" class="add-btn">BOOK NOW</a>
        </div>
      </div>
      <div class="product-info">
        <h4>${p.name}</h4>
        <p>${p.description}</p>
      </div>
    </div>
  `).join('');
}

// ---- FILTER ----
function filterProducts(category, btn) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(category);
}

// ---- NAV ----
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ---- CONTACT FORM ----
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-primary');
  btn.textContent = 'REQUEST SENT ✓';
  btn.style.background = '#22cc44';
  setTimeout(() => {
    btn.textContent = 'SEND REQUEST';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ---- NAVBAR SCROLL EFFECT ----
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'var(--yellow)';
    nav.style.background = 'rgba(10,10,10,0.99)';
  } else {
    nav.style.background = 'rgba(10,10,10,0.97)';
  }
});

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});
