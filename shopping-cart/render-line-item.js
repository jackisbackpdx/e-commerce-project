import { findProducts } from './find-by-id.js';
import { makeTr } from './render-table-row.js';
import { instruments } from '../products/app.js';
import { cart } from '../data/cart.js';

const tBody = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const chosenInstrument = findProducts(instruments, lineItem.code);
    const dom = makeTr(chosenInstrument, lineItem);
        
    tBody.appendChild(dom);
}
