// document.addEventListener('DOMContentLoaded', ready);

// function ready() {
//     var addToCartButtons = document.getElementsByClassName('card-btn');
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i];
//         button.addEventListener('click', addToCartClicked);
//     }
// }

// function addToCartClicked(event) {
//     var button = event.target;
//     var productCard = button.parentElement.parentElement;
//     var title = productCard.getElementsByClassName('product-brand')[0].innerText;
//     var price = productCard.getElementsByClassName('price')[0].innerText;
//     var imageSrc = productCard.getElementsByClassName('product-thumb')[0].src;

//     addItemToCart(title, price, imageSrc);
//     updateCartTotal();
// }

// function addItemToCart(title, price, imageSrc) {
//     var cartRow = document.createElement('div');
//     cartRow.classList.add('cart-items');
//     var cartItems = document.getElementsByClassName('cart-item')[0];
//     var cartItemNames = cartItems.getElementsByClassName('cart-item-title');

//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert('This item is already added to the cart');
//             return;
//         }
//     }

//     var cartRowContents = `
//         <div class="cart-item cart-column">
//             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-price cart-column">${price}</span>
//         <div class="cart-quantity cart-column">
//             <input class="cart-quantity-input" type="number" value="1">
//             <button class="btn btn-danger" type="button">REMOVE</button>
//         </div>`;
    
//     cartRow.innerHTML = cartRowContents;
//     cartItems.append(cartRow);
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
// }

// function removeCartItem(event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//     updateCartTotal();
// }

// function quantityChanged(event) {
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//     }
//     updateCartTotal();
// }

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0];
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row');
//     var total = 0;
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i];
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0];
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
//         var price = parseFloat(priceElement.innerText.replace('$', ''));
//         var quantity = quantityElement.value;
//         total += price * quantity;
//     }
//     total = Math.round(total * 100) / 100;
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
// }
