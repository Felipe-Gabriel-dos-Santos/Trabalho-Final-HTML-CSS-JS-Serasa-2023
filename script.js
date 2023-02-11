const toggle = document.querySelector("#dark-mode-toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  toggle.innerText = body.classList.toggle("dark-mode")
    ? "Modo Claro"
    : "Modo Escuro";
});
