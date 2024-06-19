import { displayProduct, fetchData } from "./main.js";

let productCardTemplate = document.querySelector('#productCardTemplate');
let productAppender  = document.querySelector('.product-container');
let localData = JSON.parse(localStorage.getItem('mycart')) || []
console.log(productAppender);
let Products =[]
// console.log(Products);
let myProducts  = []
  fetchData.then((res)=>{
    myProducts = res.products
    console.log(res.products);
}).then((err)=>{
    console.log(err);
})
console.log(myProducts);


function cartItem (item){
    
   for (let i = 0; i < localData.length; i++) {
        if (localData[i].id == item.id ) {
            if(localData[i].quantity >= item.maxQuantity) return;

            localData[i].quantity += 1;
            console.log(localData);
            localStorage.setItem("mycart",JSON.stringify(localData))
            return
        }
   }

   localData.push(item);
   myUpdateCartNumber(localData.length)
   localStorage.setItem("mycart",JSON.stringify(localData));

    console.log(localData);
    
}



myProducts.forEach((product)=>{

let theProduct = displayProduct(productCardTemplate,product);
theProduct.cardBtn.onclick = ()=>{cartItem(product)};
productAppender.appendChild(theProduct.productTempate);
    
    // console.log(product);
})

 function myUpdateCartNumber (x){
    
    document.querySelector('.cart-number').textContent = 0+x 
}

myUpdateCartNumber(localData.length)

