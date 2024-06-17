// Function to add item to cart
function addToCart(event) {
    const button = event.target;
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('.product-brand').innerText;
    const productPrice = productCard.querySelector('.price').innerText;
    const productImage = productCard.querySelector('.product-thumb').src;

    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add product to cart
    const product = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex >= 0) {
        // Increase quantity if product already exists
        cart[existingProductIndex].quantity += 1;
    } else {
        // Add new product to cart
        cart.push(product);
    }

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-number').innerText = cartCount;
}

// Add event listeners to "Add To Cart" buttons
document.querySelectorAll('.card-btn').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Initial call to update cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
