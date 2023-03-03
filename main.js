let listaItem = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  salvarItem();
});

function salvarItem() {
  const comprasItem = itensInput.value;
  const checarDuplicado = listaItem.some(
    (elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase()
  );

  if (checarDuplicado) {
    alert("Item já existe");
  } else {
    listaItem.push({
      valor: comprasItem,
    });
  }

  console.log(listaItem);
}
