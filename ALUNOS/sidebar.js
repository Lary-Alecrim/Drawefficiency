document
  .querySelectorAll(".aside-list").forEach((list) => {
  list.addEventListener("click", function (event) {
    const li = event.target.closest("li"); //caça o li
    if (li && li.dataset.link) {
      window.location.href = li.dataset.link; // quando clicar vai mudar para outra página
    }
  });
});
