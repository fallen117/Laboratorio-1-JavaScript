window.addEventListener("DOMContentLoaded", () => {

    const email = localStorage.getItem("email");
    const nombre = localStorage.getItem("nombre");
    const intereses = JSON.parse(localStorage.getItem("intereses")) || [];

    document.getElementById("email-check").textContent = email || "No especificado";
    document.getElementById("name-check").textContent = nombre || "No especificado";
    document.getElementById("interests-check").textContent = intereses.length > 0 ? intereses.join(", ") : "No aplica";
});
