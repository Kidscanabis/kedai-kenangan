// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav"); // Ambil element navbar-nav

// Kerika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  // Ketika hamburger menu di klik
  navbarNav.classList.toggle("active"); // Tambahkan class active pada navbar-nav
};

// Ketika diklik diluar
const hamburger = document.querySelector("#hamburger-menu"); // Ambil element hamburger-menu

document.addEventListener("click", function (e) {
  // Ketika diklik diluar
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    // Jika element yang diklik bukan hamburger-menu dan bukan navbar-nav
    navbarNav.classList.remove("active"); // Hapus class active pada navbar-nav
  }
});
