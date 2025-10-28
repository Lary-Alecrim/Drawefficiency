const modais = document.querySelectorAll(".modal");
const botoes = document.querySelectorAll(".avaliacao");
const botoesFechar = document.querySelectorAll(".close");
const modalConfirmacao = document.querySelector(".modal-confirmacao");

botoes.forEach((btn, i) => {
  const modal = modais[i];
  const closeBtn = botoesFechar[i];
  const formEstagio = modal.querySelector("form");
  const dataInput = modal.querySelector("#data"); 
  btn.addEventListener("click", () => {
    modal.style.display = "block";

    if (dataInput) {
      const hoje = new Date();
      const ano = hoje.getFullYear();
      const mes = String(hoje.getMonth() + 1).padStart(2, "0");
      const dia = String(hoje.getDate()).padStart(2, "0");
      dataInput.value = `${ano}-${mes}-${dia}`;
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });


  formEstagio.addEventListener("submit", (e) => {
    e.preventDefault();

    modal.style.display = "none";
    modalConfirmacao.style.display = "flex";

    setTimeout(() => {
      modalConfirmacao.style.display = "none";
      formEstagio.reset();
    }, 2000);
  });
});
