
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("buscador");
  const filtroGrado = document.getElementById("filtro-grado");
  const recursos = Array.from(document.querySelectorAll(".card"));
  function aplicarFiltro() {
    const q = (input.value || "").toLowerCase().trim();
    const grado = filtroGrado.value;
    recursos.forEach(card => {
      const titulo = card.dataset.titulo.toLowerCase();
      const autor = card.dataset.autor.toLowerCase();
      const desc = (card.dataset.descripcion || "").toLowerCase();
      const g = card.dataset.grado;
      const matchQ = !q || titulo.includes(q) || autor.includes(q) || desc.includes(q) || g.includes(q);
      const matchG = !grado || grado === g;
      card.style.display = (matchQ && matchG) ? "" : "none";
    });
  }
  input.addEventListener("input", aplicarFiltro);
  filtroGrado.addEventListener("change", aplicarFiltro);
});
