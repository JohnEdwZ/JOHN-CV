const LIGHT_MODE_BTN =  document.querySelector(".light-mode-btn");
const DARK_MODE_BTN = document.querySelector(".dark-mode-btn");

LIGHT_MODE_BTN.addEventListener("click", setDarkMode);
DARK_MODE_BTN.addEventListener("click", setLightMode);

function setDarkMode() {
    setUserTheme("dark");
}

function setLightMode() {
    setUserTheme("light");
}

function setUserTheme(newTheme) {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}