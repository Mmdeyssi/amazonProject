export const deliveryOptions = [
    {
        id: '1',
        days:7,
        priceCents:0
    },
    {
        id: '2',
        days:3,
        priceCents:499
    },
    {
        id: '3',
        days:1,
        priceCents:999
    }
]
export function getDeliveryOptionId(deliveryoption){
    let deliveryop;
    deliveryOptions.forEach((option)=>{
        if(option.id===deliveryoption){
          deliveryop=option;
        }
  
      });
      return deliveryop;
}