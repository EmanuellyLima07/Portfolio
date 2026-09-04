// ==========================================================================
// main.js
// Comportamentos da página: menu mobile, ano do rodapé e feedback do form.
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setCurrentYear();
  setupContactForm();
});

/**
 * Abre/fecha o menu de navegação em telas pequenas e mantém o
 * atributo aria-expanded sincronizado para leitores de tela.
 */
function setupMobileNav() {
  const toggleButton = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (!toggleButton || !nav) return;

  toggleButton.addEventListener("click", () => {
    const isOpen = nav.dataset.open === "true";

    nav.dataset.open = String(!isOpen);
    toggleButton.setAttribute("aria-expanded", String(!isOpen));
  });

  // Fecha o menu ao clicar em um link (útil em telas pequenas)
  nav.addEventListener("click", (event) => {
    if (event.target.matches(".nav__link")) {
      nav.dataset.open = "false";
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
}

/**
 * Preenche o ano atual no rodapé automaticamente.
 */
function setCurrentYear() {
  const yearEl = document.getElementById("anoAtual");
  if (!yearEl) return;

  yearEl.textContent = new Date().getFullYear();
}

/**
 * Valida e exibe uma mensagem de feedback ao enviar o formulário de contato.
 * Não há envio real: substitua pelo seu backend/serviço de e-mail preferido
 * (ex.: Formspree, EmailJS ou uma rota própria em Java/Node/Flask).
 */
function setupContactForm() {
  const form = document.querySelector(".form");
  const feedback = document.querySelector("[data-form-feedback]");

  if (!form || !feedback) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      feedback.textContent = "Por favor, preencha todos os campos corretamente.";
      return;
    }

    feedback.textContent = "Mensagem pronta para envio. Conecte este formulário a um serviço real.";
    form.reset();
  });
}
