const cart = [];
let total = 0;

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice * 1000 });
    total += productPrice * 1000;
    updateCartUI();
}

// Función para actualizar la interfaz de usuario del carrito
function updateCartUI() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    cartItemsElement.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - COP $${item.price}`;
        cartItemsElement.appendChild(li);
    });

    cartTotalElement.textContent = `$${total}`;