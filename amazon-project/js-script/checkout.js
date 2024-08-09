import { cart, deleteFromCart } from "../data/card.js";
import { products } from "../data/products.js";


//import { updateCartQuantity } from "./amazon.js";
let summaryHtml='';
cart.forEach((cartItem)=>{
    const productId=cartItem.id;
    let matchingProduct;
    products.forEach((product)=>{
        if(product.id===productId){
            matchingProduct=product;
        }
        
    })
   
    summaryHtml +=` <div class="cart-item-container js-cart-item-${cartItem.id}">
            <div class="delivery-date">Delivery date: Tuesday, June 21</div>

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
                  <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete" data-product-id="${cartItem.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    checked
                    class="delivery-option-input"
                    name="delivery-option-1-${cartItem.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1-${cartItem.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1-${cartItem.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          `

      
    


});
document.querySelector('.container-js').innerHTML=summaryHtml;
document.querySelectorAll('.js-delete').forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId=button.dataset.productId;
        deleteFromCart(productId);
        document.querySelector(`.js-cart-item-${productId}`).remove();
    })
})  

