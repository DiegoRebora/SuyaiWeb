

function mostrar(variable) {
  let elemento = document.getElementById(variable);
  if (elemento.style.display === "none") {
    elemento.style.display = "block";
} else {
  elemento.style.display = "none";
} }

