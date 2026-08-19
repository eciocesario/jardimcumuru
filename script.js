/* Pousada Jardim Cumuru — melhorias progressivas (o site funciona sem JS) */
(function () {
  "use strict";

  /* Marca que há JS: ativa as animações de entrada (sem JS, tudo fica visível) */
  document.documentElement.classList.add("js");

  var header = document.querySelector(".header");
  var navToggle = document.getElementById("navtoggle");

  /* Header ganha fundo ao rolar */
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Fecha o menu mobile (checkbox CSS) ao clicar num link */
  document.querySelectorAll(".nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (navToggle) navToggle.checked = false;
    });
  });

  /* Revelar seções ao entrar na tela */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Ano no rodapé */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
