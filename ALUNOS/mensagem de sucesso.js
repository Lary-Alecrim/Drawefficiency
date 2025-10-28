const form = document.querySelector(".form_estagio");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // ⚡ Impede o reload da página

  const botao = this.querySelector("button");
  botao.disabled = true;
  botao.textContent = "Enviado";
  botao.classList.add("enviado");


  const msg = document.getElementById("mensagem-sucesso");
  msg.style.display = "block";


  setTimeout(() => {
    msg.style.display = "none";
    botao.disabled = false;
    botao.textContent = "Enviar";
    botao.classList.remove("enviado");
  }, 3000);
});
