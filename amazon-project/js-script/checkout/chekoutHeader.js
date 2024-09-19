import { cart } from "../../data/card";
export function generateHeader(){

const Html = `Checkout (<a class="return-to-home-link" href="amazon.html">${cart.length} items</a>)`
document.querySelector('.header-js').innerHTML=Html;
}