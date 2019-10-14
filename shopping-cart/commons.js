import { calcLineTotal } from './find-by-id.js';
 

function totalCost(cart, instruments) {
    let total = 0;
    cart.forEach((cartItem) => {
        instruments.forEach((instrument) => {
            if (instrument.code === cartItem.code) {
                total += calcLineTotal(cartItem.quantity, instrument.salePrice);
            }
        });    
    });
    return `$${total.toFixed(2)}`;
}


export default totalCost;
