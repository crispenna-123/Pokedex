const toggle = document.getElementById("toggleDarkMode");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
