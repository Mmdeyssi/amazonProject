import { cart, deleteFromCart,updateDeliveryOptionId} from "../../data/card.js";
import { products } from "../../data/products.js";
import  dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"
import { deliveryOptions } from "../../data/deliveryOptions.js";


//import { updateCartQuantity } from "./amazon.js";

export function renderOrderSummary(){
  let summaryHtml='';
cart.forEach((cartItem)=>{
    const productId=cartItem.id;
    let matchingProduct;
    
    products.forEach((product)=>{
        if(product.id===productId){
            matchingProduct=product;
        }
        
    });
    const deliveryoption=cartItem.deliveryOptionsId;
    let deliveryop;
    deliveryOptions.forEach((option)=>{
      if(option.id===deliveryoption){
        deliveryop=option;
      }

    });
    const today=dayjs();
    const deliveryDate=today.add(deliveryop.days , 'days');
    const deliveryDateStr=deliveryDate.format('dddd, MMMM  D');


   
    summaryHtml +=`
        <div class="cart-item-container js-cart-item-${matchingProduct.id}">
          <div class="delivery-date">Delivery date: ${deliveryDateStr} </div>

            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src="${matchingProduct.image}"
              />
             
              
              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">$ ${(matchingProduct.priceCents / 100 ).toFixed(2)}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${matchingProduct.quantity}</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>
              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div>
                  ${deliveryOptionsHTML(matchingProduct,cartItem)}
                </div>
              
            </div>
          </div>
        </div>  

          `
});
function deliveryOptionsHTML(matchingProduct,cart){
    let html='';
    deliveryOptions.forEach((deliveryOption)=> {
      const today=dayjs();
      const deliveryDate=today.add(deliveryOption.days , 'days');
      const deliveryDateStr=deliveryDate.format('dddd, MMMM  D');
      const price = deliveryOption.priceCents === 0 ? "FREE" : `$${(deliveryOption.priceCents/100).toFixed(2)}`;
      const isChecked= deliveryOption.id===cart.deliveryOptionsId;
      html+= `
      <div class="delivery-option delivery-js" data-product-id= "${matchingProduct.id}"
      data-delivery-option-id="${deliveryOption.id}" >
        <input
          type="radio"
          ${isChecked ? "checked" : ""}
          class="delivery-option-input"
          name="delivery-option-1-${matchingProduct.id}"
        />
        <div>
          <div class="delivery-option-date">${deliveryDateStr}</div>
          <div class="delivery-option-price">${price} - Shipping</div>
        </div>
      </div> `  
    })
    return html;
  }
  document.querySelector('.container-js').innerHTML=summaryHtml;
  document.querySelectorAll('.js-delete').forEach((button)=>{
      button.addEventListener('click',()=>{
          const productId=button.dataset.productId;
          deleteFromCart(productId);
          document.querySelector(`.js-cart-item-${productId}`).remove();
        }) ;
      })
document.querySelectorAll('.delivery-js').forEach((element)=>{
  element.addEventListener('click',()=>{
    const {productId,deliveryOptionId}= element.dataset;
    updateDeliveryOptionId(productId,deliveryOptionId);
    renderOrderSummary();
    
  });
});

}
renderOrderSummary();

 

