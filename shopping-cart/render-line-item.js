import findProducts from './find-by-id.js';
import { makeTr } from './render-table-row.js';
import instruments from '../products/app.js';
import totalCost from './commons.js';
import { makeTd } from './render-table-row.js'; 

const tableBody = document.querySelector('tbody');

const json = localStorage.getItem('CART');
let cart;
if (json) {
    cart = JSON.parse(json);
} else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const chosenInstrument = findProducts(instruments, lineItem.code);
    const dom = makeTr(chosenInstrument, lineItem);
        
    tableBody.appendChild(dom);
}

const placeTotal = () => {
    const row = document.createElement('tr');
    row.appendChild(makeTd(' '));
    row.appendChild(makeTd(' '));
    const totalHeader = (makeTd('Total Cost:'));
    totalHeader.className = 'total-header';
    row.appendChild(totalHeader);
    row.appendChild(makeTd(totalCost(cart, instruments)));

    tableBody.appendChild(row);
};

placeTotal();


const button = document.querySelector('button');
button.addEventListener('click', () => {
    const jsonParsed = JSON.parse(localStorage.getItem('CART'));
    let itemsOrdered = '\n';
    jsonParsed.forEach(item => {
        itemsOrdered += item.quantity + ' ' + item.code + '\n';
    });
    alert(`You are ordering: ${itemsOrdered} Thank you for shopping with us!`);
    localStorage.clear();
    window.location.href = '../products/titlepage.html';
});

