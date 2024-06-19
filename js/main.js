export function displayProduct(templateElement,datas) {
    let productTempate = templateElement.content.cloneNode(true).children[0];
    let productImage = productTempate.querySelector('.product-thumb');
    let productCartCard= productTempate.querySelector('.product-card');
    let productBrand = productTempate.querySelector('.product-brand');
    let actualPrice = productTempate.querySelector('.actual-price');
    let cardBtn = productTempate.querySelector('.card-btn')
    
    productTempate.id ="product"+datas.id;
    productImage.src = datas.productImage;
    productBrand.textContent = datas.productBrand;
    actualPrice.textContent = datas.productActualPrice;

    return {productTempate,datas,cardBtn}
}   


export const fetchData = new Promise(async (resolve, reject) => {
    const res = await fetch("products.json",{
        method:'GET',

    })

   if (res.ok) {
        resolve(await res.json())
   }else{
    reject("no message")
   }

})

export async function fetchSingle (url,id){
    const res = await fetch(url+"?"+id,{
        method:'GET'
    })

    const json = await res.json()

    return {json}
}