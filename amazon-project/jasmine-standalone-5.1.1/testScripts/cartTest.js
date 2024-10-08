import { addToCart,cart,loadFromLocalStorage } from "../../data/card.js";
describe('test suite : adding product',()=>{

    it('adding an existing product',()=>{
        spyOn(localStorage,'setItem');
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([
                {
                    id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity:1,
                    deliveryOptionsId:'1'
                }
            ]);
            
        });  
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(cart[0].id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].quantity).toEqual(2);
        loadFromLocalStorage();

    })
    it('adding a new product',()=>{
        spyOn(localStorage,'setItem');
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });  
        loadFromLocalStorage();
        
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(cart[0].id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        
       
    })
})