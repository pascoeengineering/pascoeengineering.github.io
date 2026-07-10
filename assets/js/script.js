const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('nav ul');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}
const menuButton = document.querySelector(".mobile-menu-button");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });
}