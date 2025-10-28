const modal = document.getElementById("modal-form");

const clockIcons = document.querySelectorAll(".estagio ");

const closeBtn = document.querySelector(".close");

const dataInput = document.getElementById("data");


clockIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    modal.style.display = "block";

    
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    dataInput.value = `${ano}-${mes}-${dia}`;
  });
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

