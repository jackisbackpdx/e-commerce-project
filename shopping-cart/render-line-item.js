import { findProducts } from './find-by-id.js';
import { makeTr } from './render-table-row.js';
import { instruments } from '../products/app.js';
import { cart } from '../products/app.js';

const tBody = document.querySelector('tbody');
console.log(instruments);
for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
console.log(lineItem.code, 'code');
    const chosenInstrument = findProducts(instruments, lineItem.code);
    console.log(chosenInstrument);
    const dom = makeTr(chosenInstrument, lineItem);
    
    tBody.appendChild(dom);
}
