const root = document.documentElement;
let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
root.setAttribute("data-theme", theme);

const toggle = document.querySelector("[data-theme-toggle]");

function renderTheme() {
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
  toggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Переключить на светлую тему" : "Переключить на тёмную тему"
  );
}

renderTheme();
toggle.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", theme);
  renderTheme();
});

const moodButtons = document.querySelectorAll("[data-day-emoji]");

moodButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    moodButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    toast(`Настроение дня: ${btn.dataset.dayLabel}`);
  });
});

function toast(text) {
  const el = document.getElementById("toast");
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

window.toast = toast;
