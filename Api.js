// Variables para el carrito y el total
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
}

// Manejo de clic en los botones de compra
const buyButtons = document.querySelectorAll(".btn-2");
buyButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const productElement = event.target.closest(".product-1");
        const productName = productElement.querySelector("h3").textContent;
        const productPrice = parseFloat(productElement.querySelector(".price p").textContent.replace("COP $", ""));
        addToCart(productName, productPrice);
    });
});


const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", () => {

    alert(`Total a pagar: COP $${total}. Redireccionando a la pasarela de pago...`);
});