"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded");
});

const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.dataset.theme = "dark";
}

themeToggle.addEventListener("click", () => {
  const isDark = root.dataset.theme === "dark";

  if (isDark) {
    delete root.dataset.theme;
    localStorage.setItem("theme", "light");
  } else {
    root.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }
});

/* ========================================
   LANGUAGE SELECTOR
======================================== */

const languageButtons = document.querySelectorAll(".language-button");

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.lang;

    languageButtons.forEach((btn) => {
      btn.classList.remove("is-active");
    });

    button.classList.add("is-active");

    localStorage.setItem("language", selectedLanguage);

    document.documentElement.lang = selectedLanguage;
  });
});

/* Recuperar idioma guardado */
const savedLanguage = localStorage.getItem("language") || "es";

languageButtons.forEach((button) => {
  button.classList.toggle("is-active", button.dataset.lang === savedLanguage);
});

document.documentElement.lang = savedLanguage;

const typewriter = document.querySelector("#typewriter");
const cursor = document.querySelector(".typewriter-cursor");

const text = "Full Stack Developer · IT Specialist";
const typingSpeed = 100;

let index = 0;

function type() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;

    setTimeout(type, typingSpeed);
  } else {
    cursor.classList.add("is-blinking");
  }
}

type();
