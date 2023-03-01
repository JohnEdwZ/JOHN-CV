const MENU = document.querySelector(".menu");
const OPEN_MENU_BTN = document.querySelector(".open-menu");
const CLOSE_MENU_BTN = document.querySelector(".close-menu");

function toggleMenu () {
    MENU.classList.toggle("menu_opened");
}

OPEN_MENU_BTN.addEventListener("click", toggleMenu);
CLOSE_MENU_BTN.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    MENU.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});
