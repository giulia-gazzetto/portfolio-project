import { translations } from "./translations.js";

function translatePage() {
  const lang = localStorage.getItem("lang") || "it";

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Cambia il link del CV
  //const cvLink = document.getElementById("cv-link");
  //if (cvLink) {
  //cvLink.href = lang === "it" ? "cv-italiano.pdf" : "cv-english.pdf";
  //}
}

document.addEventListener("DOMContentLoaded", () => {
  translatePage();

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.textContent =
      localStorage.getItem("lang") === "it" ? "🇬🇧EN" : "🇮🇹IT";
  }

  langBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newLang = localStorage.getItem("lang") === "it" ? "en" : "it";
    localStorage.setItem("lang", newLang);
    window.location.reload();
  });
});
