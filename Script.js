const MOCK_HOTELS = [
  {
    id: "h1",
    name: "Prime Deluxe Suite",
    category: "DELUXE",
    rating: 4.8,
    reviews: 1240,
    price: 90,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    description: "A cozy, comfortable room with modern amenities, free Wi-Fi, and a lovely view.",
    amenities: ["Free WiFi", "Pool", "Spa", "City View"],
    status: "AVAILABLE",
  },
  {
    id: "h2",
    name: "Cozy Standard Room",
    category: "STANDARD",
    rating: 4.5,
    reviews: 856,
    price: 30,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    description: "A clean and bright room situated right in the heart of the city.",
    amenities: ["Free WiFi", "Gym", "Room Service"],
    status: "AVAILABLE",
  },
  {
    id: "h3",
    name: "Prime Royal Penthouse",
    category: "SUITE",
    rating: 5.0,
    reviews: 432,
    price: 100,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    description: "Our finest room featuring ultimate space, luxury comfort, and premium service.",
    amenities: ["Personal Assistant", "Private Balcony", "Complimentary Breakfast"],
    status: "AVAILABLE",
  },
  {
    id: "h4",
    name: "Garden View Room",
    category: "DELUXE",
    rating: 4.7,
    reviews: 921,
    price: 60,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    description: "A peaceful room overlooking our lush green garden. Perfect for a quiet getaway.",
    amenities: ["Free WiFi", "Balcony", "Breakfast Included"],
    status: "AVAILABLE",
  },
];

const MOCK_USERS = [
  { id: "U-101", name: "Alex Johnson", email: "alex@example.com", date: "August 10, 2026" },
  { id: "U-102", name: "Sarah Miller", email: "sarah@example.com", date: "August 12, 2026" },
];

const DEFAULT_ADMIN_BOOKINGS = [
  {
    id: "B-501",
    guest: "Alex Johnson",
    email: "alex@example.com",
    phone: "1234567890",
    room: "Cozy Standard Room",
    roomId: "h2",
    checkIn: "2026-08-20",
    checkOut: "2026-08-25",
    guests: 2,
    status: "Confirmed",
  },
  {
    id: "B-502",
    guest: "Sarah Miller",
    email: "sarah@example.com",
    phone: "0987654321",
    room: "Prime Deluxe Suite",
    roomId: "h1",
    checkIn: "2026-09-01",
    checkOut: "2026-09-05",
    guests: 1,
    status: "Confirmed",
  },
];

const ICONS = {
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h24M4 16h24M4 26h24"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 8l16 16M24 8L8 24"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#2e7d32" stroke-width="2"><path d="M16 4l12 6v8c0 8-5.5 12.5-12 14C9.5 30.5 4 26 4 18V10l12-6z"/></svg>',
  coffee: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#2e7d32" stroke-width="2"><path d="M6 10h16v8a6 6 0 01-6 6H12a6 6 0 01-6-6v-8zM22 12h3a3 3 0 010 6h-3M8 28h16"/></svg>',
  pin: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#2e7d32" stroke-width="2"><path d="M16 28s10-9 10-16a10 10 0 10-20 0c0 7 10 16 10 16z"/><circle cx="16" cy="12" r="3"/></svg>',
};

const state = {
  route: "home",
  isAdmin: false,
  menuOpen: false,
  selectedRoomId: null,
  roomFilter: "ALL",
  hotels: load("prime-hotels", MOCK_HOTELS),
  users: load("prime-users", MOCK_USERS),
  bookings: load("prime-bookings", DEFAULT_ADMIN_BOOKINGS),
  toast: "",
};

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function save() {
  localStorage.setItem("prime-hotels", JSON.stringify(state.hotels));
  localStorage.setItem("prime-users", JSON.stringify(state.users));
  localStorage.setItem("prime-bookings", JSON.stringify(state.bookings));
}

function navigate(route, extra) {
  state.route = route;
  state.menuOpen = false;
  if (extra && extra.roomId) state.selectedRoomId = extra.roomId;
  if (route !== "admin-dashboard" && route !== "admin-login") state.isAdmin = false;
  render();
  window.scrollTo(0, 0);
}

function showToast(message) {
  state.toast = message;
  render();
  setTimeout(() => {
    state.toast = "";
    render();
  }, 2600);
}

function nightsBetween(a, b) {
  const start = new Date(a);
  const end = new Date(b);
  const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff);
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function navbar() {
  if (state.isAdmin) return "";
  return `
    <nav class="nav">
      <div class="nav-inner">
        <div class="brand" data-go="home">
          <span class="brand-prime">PRIME</span>
          <span class="brand-hotel">Hotel</span>
        </div>
        <div class="nav-links">
          <button data-go="home" class="${state.route === "home" ? "active" : ""}">Home</button>
          <button data-go="rooms" class="${state.route === "rooms" || state.route === "room" ? "active" : ""}">Rooms</button>
          <button data-go="dashboard" class="${state.route === "dashboard" ? "active" : ""}">My Bookings</button>
          <button class="btn-admin" data-go="admin-login">Admin Login</button>
        </div>
        <button class="menu-toggle" data-action="toggle-menu">${state.menuOpen ? ICONS.close : ICONS.menu}</button>
      </div>
      <div class="mobile-menu ${state.menuOpen ? "open" : ""}">
        <button data-go="home">Home</button>
        <button data-go="rooms">Rooms</button>
        <button data-go="dashboard">My Bookings</button>
        <button class="green" data-go="admin-login">Admin Dashboard</button>
      </div>
    </nav>
  `;
}

function adminBar() {
  if (!state.isAdmin) return "";
  return `
    <div class="admin-nav">
      <div class="brand" data-go="admin-dashboard">
        <span class="brand-prime">PRIME</span>
        <span class="brand-hotel">Admin</span>
      </div>
      <button class="btn-outline" data-action="logout">Logout</button>
    </div>
  `;
}

function homepage() {
  return `
    <section class="hero">
      <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80" alt="Hotel exterior" />
      <div class="hero-card">
        <h1>Welcome to <br /><span>Prime Hotel</span></h1>
        <p>Enjoy clean and comfortable rooms, delicious food, and wonderful hospitality at affordable rates.</p>
        <button class="btn-primary" data-go="rooms">Explore Rooms</button>
      </div>
    </section>
    <section class="section">
      <div class="section-title">
        <h2>Why Stay With Us</h2>
        <div class="rule"></div>
      </div>
      <div class="feature-grid">
        <article class="feature-card">
          <div class="icon-wrap">${ICONS.shield}</div>
          <h3>Safe & Secure</h3>
          <p>Your safety and comfort are our top priorities around the clock.</p>
        </article>
        <article class="feature-card">
          <div class="icon-wrap">${ICONS.coffee}</div>
          <h3>Fresh Dining</h3>
          <p>Enjoy freshly prepared meals and complimentary breakfast every morning.</p>
        </article>
        <article class="feature-card">
          <div class="icon-wrap">${ICONS.pin}</div>
          <h3>Prime Location</h3>
          <p>Conveniently situated near major city attractions and shopping centers.</p>
        </article>
      </div>
    </section>
  `;
}

function roomCard(room) {
  return `
    <article class="room-card">
      <img src="${room.image}" alt="${escapeHtml(room.name)}" />
      <div class="room-body">
        <div class="room-meta">
          <span class="badge">${room.category}</span>
          <span class="stars">★ ${room.rating} · ${room.reviews} reviews</span>
        </div>
        <h3>${escapeHtml(room.name)}</h3>
        <p class="muted">${escapeHtml(room.description)}</p>
        <div class="amenities">${room.amenities.map((item) => `<span class="amenity">${escapeHtml(item)}</span>`).join("")}</div>
        <div class="room-meta">
          <div class="price">$${room.price} <span>/ night</span></div>
          <span class="status ${room.status}">${room.status}</span>
        </div>
        <div class="room-actions">
          <button class="btn-primary" data-go="room" data-room="${room.id}">View & Book</button>
        </div>
      </div>
    </article>
  `;
}

function roomsPage() {
  const filtered =
    state.roomFilter === "ALL"
      ? state.hotels
      : state.hotels.filter((room) => room.category === state.roomFilter);
  const filters = ["ALL", "STANDARD", "DELUXE", "SUITE"];
  return `
    <section class="section">
      <div class="section-title">
        <h2>Our Rooms</h2>
        <div class="rule"></div>
      </div>
      <div class="toolbar">
        <p class="muted">${filtered.length} room${filtered.length === 1 ? "" : "s"} available to browse</p>
        <div class="filters">
          ${filters
            .map(
              (item) =>
                `<button class="chip ${state.roomFilter === item ? "active" : ""}" data-action="filter" data-filter="${item}">${item}</button>`
            )
            .join("")}
        </div>
      </div>
      <div class="rooms-grid">
        ${filtered.map(roomCard).join("") || '<p class="empty">No rooms in this category.</p>'}
      </div>
    </section>
  `;
}

function roomPage() {
  const room = state.hotels.find((item) => item.id === state.selectedRoomId) || state.hotels[0];
  const today = new Date().toISOString().slice(0, 10);
  return `
    <section class="section">
      <button class="chip" data-go="rooms">← Back to rooms</button>
      <div class="detail" style="margin-top:24px">
        <div>
          <img src="${room.image}" alt="${escapeHtml(room.name)}" />
          <div class="amenities" style="margin-top:16px">${room.amenities
            .map((item) => `<span class="amenity">${escapeHtml(item)}</span>`)
            .join("")}</div>
        </div>
        <div class="panel">
          <span class="badge">${room.category}</span>
          <h2 style="margin:12px 0 8px">${escapeHtml(room.name)}</h2>
          <p class="stars">★ ${room.rating} · ${room.reviews} reviews</p>
          <p class="muted" style="margin:12px 0 18px">${escapeHtml(room.description)}</p>
          <div class="price">$${room.price} <span>/ night</span></div>
          <form class="form" id="booking-form" data-room="${room.id}" style="margin-top:20px">
            <label>Full name</label>
            <input name="guest" required placeholder="Alex Johnson" />
            <label>Email</label>
            <input name="email" type="email" required placeholder="alex@example.com" />
            <label>Phone</label>
            <input name="phone" required placeholder="1234567890" />
            <label>Check-in</label>
            <input name="checkIn" type="date" required min="${today}" />
            <label>Check-out</label>
            <input name="checkOut" type="date" required min="${today}" />
            <label>Guests</label>
            <select name="guests">
              <option>1</option>
              <option selected>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <button class="btn-primary" type="submit">Confirm Booking</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function dashboardPage() {
  const rows = state.bookings
    .map(
      (booking) => `
      <tr>
        <td>${booking.id}</td>
        <td>${escapeHtml(booking.room)}</td>
        <td>${formatDate(booking.checkIn)}</td>
        <td>${formatDate(booking.checkOut)}</td>
        <td>${booking.guests}</td>
        <td><span class="status ${booking.status}">${booking.status}</span></td>
        <td>
          ${
            booking.status !== "Cancelled"
              ? `<button class="btn-danger" data-action="cancel-booking" data-id="${booking.id}">Cancel</button>`
              : ""
          }
        </td>
      </tr>`
    )
    .join("");
  return `
    <section class="section">
      <div class="section-title">
        <h2>My Bookings</h2>
        <div class="rule"></div>
      </div>
      <div class="panel table-wrap">
        ${
          state.bookings.length
            ? `<table>
                <thead><tr><th>ID</th><th>Room</th><th>Check-in</th><th>Check-out</th><th>Guests</th><th>Status</th><th></th></tr></thead>
                <tbody>${rows}</tbody>
              </table>`
            : '<p class="empty">You have no bookings yet. Explore rooms to get started.</p>'
        }
      </div>
    </section>
  `;
}

function adminLoginPage() {
  return `
    <section class="login-wrap">
      <div class="panel login-card">
        <h2>Admin Login</h2>
        <p class="muted" style="margin:8px 0 20px">Use admin / admin123</p>
        <form class="form" id="admin-form">
          <label>Username</label>
          <input name="username" required placeholder="admin" />
          <label>Password</label>
          <input name="password" type="password" required placeholder="admin123" />
          <button class="btn-primary" type="submit">Enter Dashboard</button>
        </form>
      </div>
    </section>
  `;
}

function adminDashboard() {
  const confirmed = state.bookings.filter((item) => item.status === "Confirmed").length;
  return `
    <section class="section">
      <div class="section-title">
        <h2>Admin Dashboard</h2>
        <div class="rule"></div>
      </div>
      <div class="stats-grid">
        <article class="stat-card"><h3>Rooms</h3><p>${state.hotels.length}</p></article>
        <article class="stat-card"><h3>Users</h3><p>${state.users.length}</p></article>
        <article class="stat-card"><h3>Confirmed Bookings</h3><p>${confirmed}</p></article>
      </div>
      <div class="panel table-wrap" style="margin-bottom:24px">
        <h3 style="margin-bottom:12px">Bookings</h3>
        <table>
          <thead>
            <tr><th>ID</th><th>Guest</th><th>Room</th><th>Dates</th><th>Guests</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            ${state.bookings
              .map(
                (booking) => `
                <tr>
                  <td>${booking.id}</td>
                  <td>${escapeHtml(booking.guest)}<br /><span class="muted">${escapeHtml(booking.email)}</span></td>
                  <td>${escapeHtml(booking.room)}</td>
                  <td>${formatDate(booking.checkIn)} → ${formatDate(booking.checkOut)}</td>
                  <td>${booking.guests}</td>
                  <td><span class="status ${booking.status}">${booking.status}</span></td>
                  <td>
                    ${
                      booking.status === "Pending"
                        ? `<button class="btn-small" data-action="confirm-booking" data-id="${booking.id}">Confirm</button>`
                        : ""
                    }
                    ${
                      booking.status !== "Cancelled"
                        ? `<button class="btn-danger" data-action="cancel-booking" data-id="${booking.id}">Cancel</button>`
                        : ""
                    }
                  </td>
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="panel table-wrap" style="margin-bottom:24px">
        <h3 style="margin-bottom:12px">Users</h3>
        <table>
          <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Joined</th></tr></thead>
          <tbody>
            ${state.users
              .map(
                (user) =>
                  `<tr><td>${user.id}</td><td>${escapeHtml(user.name)}</td><td>${escapeHtml(user.email)}</td><td>${escapeHtml(user.date)}</td></tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="panel table-wrap">
        <h3 style="margin-bottom:12px">Rooms</h3>
        <table>
          <thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Status</th></tr></thead>
          <tbody>
            ${state.hotels
              .map(
                (room) => `
                <tr>
                  <td>${escapeHtml(room.name)}</td>
                  <td>${room.category}</td>
                  <td>$${room.price}</td>
                  <td>
                    <button class="status ${room.status}" data-action="toggle-room" data-id="${room.id}">${room.status}</button>
                  </td>
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function pages() {
  if (state.isAdmin) return adminDashboard();
  switch (state.route) {
    case "rooms":
      return roomsPage();
    case "room":
      return roomPage();
    case "dashboard":
      return dashboardPage();
    case "admin-login":
      return adminLoginPage();
    default:
      return homepage();
  }
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="app-shell">
      ${state.isAdmin ? adminBar() : navbar()}
      <main class="page">${pages()}</main>
      ${state.isAdmin ? "" : `<footer class="footer">© ${new Date().getFullYear()} Prime Hotel · Comfort, dining, and hospitality.</footer>`}
      ${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ""}
    </div>
  `;
}

function createBooking(form, room) {
  const guest = form.guest.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const checkIn = form.checkIn.value;
  const checkOut = form.checkOut.value;
  const guests = Number(form.guests.value);
  if (new Date(checkOut) <= new Date(checkIn)) {
    showToast("Check-out must be after check-in.");
    return;
  }
  const id = "B-" + (500 + state.bookings.length + 1);
  state.bookings.unshift({
    id,
    guest,
    email,
    phone,
    room: room.name,
    roomId: room.id,
    checkIn,
    checkOut,
    guests,
    status: "Confirmed",
  });
  if (!state.users.some((user) => user.email === email)) {
    state.users.unshift({
      id: "U-" + (100 + state.users.length + 1),
      name: guest,
      email,
      date: formatDate(new Date().toISOString()),
    });
  }
  save();
  showToast(`Booked ${room.name} for ${nightsBetween(checkIn, checkOut)} night(s).`);
  navigate("dashboard");
}

document.getElementById("app").addEventListener("click", (event) => {
  const go = event.target.closest("[data-go]");
  if (go) {
    navigate(go.dataset.go, { roomId: go.dataset.room });
    return;
  }
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) return;
  const { action, id, filter } = actionEl.dataset;
  if (action === "toggle-menu") {
    state.menuOpen = !state.menuOpen;
    render();
  }
  if (action === "filter") {
    state.roomFilter = filter;
    render();
  }
  if (action === "logout") {
    state.isAdmin = false;
    navigate("home");
  }
  if (action === "cancel-booking") {
    const booking = state.bookings.find((item) => item.id === id);
    if (booking) booking.status = "Cancelled";
    save();
    showToast("Booking cancelled.");
  }
  if (action === "confirm-booking") {
    const booking = state.bookings.find((item) => item.id === id);
    if (booking) booking.status = "Confirmed";
    save();
    showToast("Booking confirmed.");
  }
  if (action === "toggle-room") {
    const room = state.hotels.find((item) => item.id === id);
    if (room) room.status = room.status === "AVAILABLE" ? "BOOKED" : "AVAILABLE";
    save();
    render();
  }
});

document.getElementById("app").addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.id === "booking-form") {
    const room = state.hotels.find((item) => item.id === event.target.dataset.room);
    createBooking(event.target, room);
  }
  if (event.target.id === "admin-form") {
    const username = event.target.username.value.trim();
    const password = event.target.password.value;
    if (username === "admin" && password === "admin123") {
      state.isAdmin = true;
      state.route = "admin-dashboard";
      showToast("Welcome, admin.");
    } else {
      showToast("Invalid admin credentials.");
    }
  }
});

render();
