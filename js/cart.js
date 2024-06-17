let localData = JSON.parse(localStorage.getItem('mycart')) || [];
let cartItem  = document.querySelector('.cart-item')
let myCartProduct = document.querySelector('[data-cartTemplate]')
// Function to update the cart total

function myUpdateCartNumber(x) {

    document.querySelector('.cart-number').textContent = 0 + x
}

myUpdateCartNumber(localData)

function displayMyCart(localData) {
    let mycart = myCartProduct.content.cloneNode(true).children[0];
    let cart_image = mycart.querySelector('.cart_image');
    let cart_item_name = mycart.querySelector('.cart-item-name');
    let price = mycart.querySelector('.price');
    let cart_quantity_input = mycart.querySelector('.cart_quantity_input');
    let subtotal = mycart.querySelector('.subtotal');
    let remove_icon = mycart.querySelector('.remove-icon')
    cart_image.src ="../"+localData.productImage;
    cart_item_name.textContent = localData.productBrand;
    price.textContent = localData.productPrice;
    cart_quantity_input.value = localData.quantity;
    subtotal.textContent = localData.quantity * localData.productPrice

    
    return {mycart,remove_icon}
   
}

// Function to remove a cart item
function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.cart-item').remove();
    myUpdateCartNumber()
}

localData.forEach((product)=>{
    let theProducts = displayMyCart(product);
    cartItem.appendChild(theProducts.mycart)
})

// Add event listeners to the remove buttons
document.querySelectorAll('.remove-icon').forEach(button => {
    button.addEventListener('click', removeCartItem);
});


// Add event listeners to "Add To Cart" buttons
document.querySelectorAll('.card-btn').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Initial call to update cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    myUpdateCartNumber(localData.length)
});

