document.querySelectorAll('#sidebar .botao-menu').forEach((botao) => {
  botao.addEventListener('click', () => {
    const link = botao.dataset.link;
    if (link) {
      window.location.href = link;
    }
  });
});
