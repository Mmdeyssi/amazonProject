import { cart} from "../../data/card.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOptionId } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../../utils/money.js";
export function paymentSummary(){
    let productsPrice=0;
    let shippingPrice=0;
    let cartQuantity=0;
    
    cart.forEach((cartItem) => {
        
        const product = getProduct(cartItem.id);
        productsPrice += product.priceCents * cartItem.quantity;
        
        

        const deliveryOption=getDeliveryOptionId(cartItem.deliveryOptionsId);
        shippingPrice += deliveryOption.priceCents;
        
    });
    const priceBeforeTax=productsPrice+shippingPrice;
    const tax=priceBeforeTax*0.1;
    const Total=priceBeforeTax+tax;

    const paymentSummaryHtml=
    `<div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (${cart.length})</div>
            <div class="payment-summary-money">$${formatCurrency(productsPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(priceBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(Total)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>
      </div>`
      
      document.querySelector('.js-payment').innerHTML=paymentSummaryHtml;
      
}
