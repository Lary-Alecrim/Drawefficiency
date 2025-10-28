// ====== ALTERAR SENHA ======
document.getElementById("alterar-senha").addEventListener("click", () => {
  const senhaInput = document.getElementById("nova-senha");
  const feedback = document.getElementById("senha-feedback");

  if (senhaInput.value.length >= 6) {
    feedback.textContent = "Senha alterada com sucesso!";
    feedback.style.color = "green";
    senhaInput.value = "";
  } else {
    feedback.textContent = "Senha deve ter pelo menos 6 caracteres.";
    feedback.style.color = "red";
  }
});

// ====== MOSTRAR / OCULTAR SENHA ======
const toggleBtn = document.getElementById("toggle-senha");
const senhaInput = document.getElementById("nova-senha");

toggleBtn.addEventListener("click", () => {
  const isPassword = senhaInput.type === "password";
  senhaInput.type = isPassword ? "text" : "password";
  toggleBtn.textContent = isPassword ? "🙈" : "👁️";
});

// ====== TEMA ======
document.getElementById("tema-claro").addEventListener("click", () => {
  document.body.classList.remove("tema-escuro", "alto-contraste");
});

document.getElementById("tema-escuro").addEventListener("click", () => {
  document.body.classList.add("tema-escuro");
  document.body.classList.remove("alto-contraste");
});

// ====== FONTE ======
let fontSize = 14;
document.body.style.setProperty("--font-size", fontSize + "px");

document.getElementById("aumentar-fonte").addEventListener("click", () => {
  if (fontSize < 70) {
    fontSize += 14;
    document.body.style.setProperty("--font-size", fontSize + "px");
  }
});

document.getElementById("diminuir-fonte").addEventListener("click", () => {
  if (fontSize > 14) {
    fontSize -= 14;
    document.body.style.setProperty("--font-size", fontSize + "px");
  }
});



// ====== DADOS DO USUÁRIO (simulação) ======
const usuario = {
  nome: "Milady Alecrim",
  telefone: "(11) 99999-9999",
  email: "milady@escola.com",
};

document.getElementById("user-nome").textContent = usuario.nome;
document.getElementById("user-telefone").textContent = usuario.telefone;
document.getElementById("user-email").textContent = usuario.email;

// === Alternar tema ===
const btnClaro = document.getElementById("tema-claro");
const btnEscuro = document.getElementById("tema-escuro");

// Verifica se já há um tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
  document.body.classList.add("tema-escuro");
}

// Botão para tema claro
btnClaro.addEventListener("click", () => {
  document.body.classList.remove("tema-escuro");
  localStorage.setItem("tema", "claro");
});

// Botão para tema escuro
btnEscuro.addEventListener("click", () => {
  document.body.classList.add("tema-escuro");
  localStorage.setItem("tema", "escuro");
});

// config-aluno.js (cole ou substitua a seção de tema por isto)
document.addEventListener("DOMContentLoaded", () => {
  // ====== CONTROLE DE TEMA ======
  const btnClaro = document.getElementById("tema-claro");
  const btnEscuro = document.getElementById("tema-escuro");

  function aplicarTemaEscuro(escuro) {
    document.documentElement.classList.toggle("tema-escuro", escuro);
    try {
      localStorage.setItem("tema", escuro ? "escuro" : "claro");
    } catch (e) {
      console.warn("Não foi possível salvar tema no localStorage:", e);
    }
  }

  if (btnClaro)
    btnClaro.addEventListener("click", () => aplicarTemaEscuro(false));
  if (btnEscuro)
    btnEscuro.addEventListener("click", () => aplicarTemaEscuro(true));

  // sincroniza entre abas
  window.addEventListener("storage", (e) => {
    if (e.key === "tema") {
      document.documentElement.classList.toggle(
        "tema-escuro",
        e.newValue === "escuro"
      );
    }
  });
});
 