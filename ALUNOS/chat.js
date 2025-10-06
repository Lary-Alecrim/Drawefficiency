document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".chat-input input");
  const sendBtn = document.querySelector(".send-btn");
  const chatMessages = document.querySelector(".chat-messages");

  function addMessage(text, sender = "aluno") {
    if (!text.trim()) return;

    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = text;

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight; // scroll automático
    return message;
  }

  function addTypingIndicator() {
    const typing = document.createElement("div");
    typing.classList.add("message", "professor", "typing");
    typing.textContent = "digitando...";
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typing;
  }

  // Enviar com clique
  sendBtn.addEventListener("click", () => {
    if (!input.value.trim()) return;

    addMessage(input.value, "aluno");
    input.value = "";

    // professor digitando
    const typing = addTypingIndicator();

    setTimeout(() => {
      typing.remove(); // remove "digitando..."
      addMessage("Entendido! Já vou verificar para você.", "professor");
    }, 2000); // 2 segundos simulando digitação
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });
});