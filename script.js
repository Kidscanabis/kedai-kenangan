// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav"); // Ambil element navbar-nav

// Kerika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  // Ketika hamburger menu di klik
  navbarNav.classList.toggle("active"); // Tambahkan class active pada navbar-nav
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form"); // Ambil element search-form
const searchBox = document.querySelector("#search-box"); // Ambil element search-box

// Ketika search-box di klik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active"); // Tambahkan class active pada search-form
  searchBox.focus(); // Fokuskan pada search-box
  e.preventDefault();
};

// Toglle class active untuk shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Ketika diklik diluar
const hamburger = document.querySelector("#hamburger-menu"); // Ambil element hamburger-menu
const searchButton = document.querySelector("#search-button"); // Ambil element search-button
const shoppingCartButton = document.querySelector("#shopping-cart-button"); // Ambil element shopping
// -cart-button

document.addEventListener("click", function (e) {
  // Ketika diklik diluar
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    // Jika element yang diklik bukan hamburger-menu dan bukan navbar-nav
    navbarNav.classList.remove("active"); // Hapus class active pada navbar-nav
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    // Jika element yang diklik bukan hamburger-menu dan bukan navbar-nav
    searchForm.classList.remove("active"); // Hapus class active pada navbar-nav
  }

  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    // Jika element yang diklik bukan hamburger-menu dan bukan navbar-nav
    shoppingCart.classList.remove("active"); // Hapus class active pada navbar-nav
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((button) => {
  button.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik diluar modal

window.onclick = (e) => {
  // Ketika diklik diluar modal
  if (e.target === itemDetailModal) {
    // Jika element yang diklik sama dengan modal
    itemDetailModal.style.display = "none"; // Sembunyikan modal
  }
};
