const form = document.getElementById("adminForm")

const productosRegistrados = [];

function formEvent (e) {
    e.preventDefault();
    const input = form.children;
    console.log(input);
    const nuevo = new Producto(input[0].value, input[1].value, input[2].value, input[3].value, input[4].value, input[5].value);
    productosRegistrados.push(nuevo);
    localStorage.setItem('productos', JSON.stringify(productosRegistrados))
    console.log(nuevo);
}

form.addEventListener("submit", formEvent)