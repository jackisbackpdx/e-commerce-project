import { instruments } from '../products/app.js';
import { cart } from '../data/cart.js';
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
    return total.toFixed(2);
}

console.log(totalCost(cart, instruments));

export default totalCost;
