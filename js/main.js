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

