let localData = JSON.parse(localStorage.getItem('mycart')) || [];
let cartItem = document.querySelector('.cart-item')
let myCartProduct = document.querySelector('[data-cartTemplate]');
let updateCart = document.querySelector('#updateCart')
// Function to update the cart total

let total = 0
let Subtotal = document.querySelector(".subtotal");
let shipping = document.querySelector(".shipping");
let carttotalprice = document.querySelector(".cart-total-price")

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
    let remove_icon = mycart.querySelector('.remove-icon');
    cart_image.src = "../" + localData.productImage;
    cart_item_name.textContent = localData.productBrand;
    price.textContent = localData.productPrice;
    mycart.id ="item"+localData.id
    cart_quantity_input.value = localData.quantity;
    subtotal.textContent = localData.quantity * localData.productPrice
    cart_quantity_input.max = localData.maxQuantity;
    remove_icon.onclick = ()=>{removeCart(localData.id)};
    cart_quantity_input.onchange = function (e) {
        total = 0
        localData.quantity = Number(e.target.value);
        subtotal.textContent = localData.quantity * localData.productPrice
        total = total + Number(localData.productPrice * localData.quantity);

    }


    return { mycart, remove_icon, subtotal: localData.productPrice * localData.quantity }

}

function removeCart (id){
    document.querySelector("#item"+id).remove();
    // console.log(id);
    localData =localData.filter((element)=>{
        return element.id !== id
    })
    
    console.log(localData);
}
// Function to remove a cart item




localData.forEach((product) => {
    let theProducts = displayMyCart(product);
    // console.log(theProducts.subtotal);
    total = total + Number(theProducts.subtotal);
    updateTotal(total);
    // console.log(total);
    cartItem.appendChild(theProducts.mycart)
})
// console.log(total);


// Add event listeners to the remove buttons



// Add event listeners to "Add To Cart" buttons
document.querySelectorAll('.card-btn').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Initial call to update cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    myUpdateCartNumber(localData.length)
});

calSubtotal(total)


function calSubtotal(total) {
    Subtotal.textContent = "$" + total
    carttotalprice.textContent = "$" + total
}

function updateTotal() {
    let totalSub = 0
    updateCart.onclick = () => {
        localStorage.setItem("mycart", JSON.stringify(localData))
        localData.forEach(price => {
            totalSub = totalSub + price.productPrice * price.quantity;
            console.log(price);

        })

        calSubtotal(totalSub)
    }
}

