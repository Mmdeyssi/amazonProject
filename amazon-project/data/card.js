export let cart;
loadFromLocalStorage()
export function loadFromLocalStorage(){
    cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart=[
         {
        id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2,
        deliveryOptionsId:'1'
        },
        {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:3,
        deliveryOptionsId:'2'
        }

];

}
}


function saveToLocalStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));

}
export function addToCart(productId){
    let matchingItem;
    cart.forEach((item)=>{
        if(item.id===productId){
            matchingItem=item;
        }  
    });
    if(matchingItem){
        matchingItem.quantity+=1;
    }else{
        cart.push({id:productId,quantity:1,deliveryOptionsId:'1'});
    }
    saveToLocalStorage();
}
export function deleteFromCart(productId){
    const newCart=[];
    cart.forEach((item)=>{
        if(item.id !== productId){
            newCart.push(item);
        }
        
    });
    cart=newCart;
    saveToLocalStorage();
}
export function updateDeliveryOptionId(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((item)=>{
        if(item.id===productId){
            matchingItem=item;
        }
    });
     matchingItem.deliveryOptionsId=deliveryOptionId;
     saveToLocalStorage();

}