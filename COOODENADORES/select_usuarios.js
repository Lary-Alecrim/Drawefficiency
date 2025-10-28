const modal = document.getElementById("modalAlunos");
const abrirBtn = document.getElementById("btnAdicionarAluno");
const closeBtn = document.querySelector(".modal .close");
const listaModal = document.getElementById("listaModalAlunos");

abrirBtn.onclick = () => {
  modal.style.display = "block";
  carregarAlunos();
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) modal.style.display = "none";
};

async function carregarAlunos() {
  listaModal.innerHTML = "<p>Carregando alunos...</p>";
  try {
    const response = await fetch("http://localhost:8080/api/alunos");
    if (!response.ok) throw new Error("Erro ao carregar alunos");
    const alunos = await response.json();

    listaModal.innerHTML = "";

    alunos.forEach(aluno => {
      const item = document.createElement("div");
      item.classList.add("aluno-item");
      item.innerHTML = `
        <span>${aluno.nome} - Matrícula: ${aluno.matricula}</span>
        <button onclick="selecionarAluno('${aluno.id}', '${aluno.nome}')">Selecionar</button>
      `;
      listaModal.appendChild(item);
    });
  } catch (error) {
    listaModal.innerHTML = `<p style="color:red;">Erro ao carregar alunos.</p>`;
    console.error(error);
  }
}
function selecionarAluno(id, nome) {
  const listaPrincipal = document.getElementById("listaAlunos");
  const novoAluno = document.createElement("div");
  novoAluno.classList.add("aluno");
  novoAluno.innerHTML = `<div class="icone"></div><p>${nome}</p>`;
  listaPrincipal.appendChild(novoAluno);

  modal.style.display = "none";
}
