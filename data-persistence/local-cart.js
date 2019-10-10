import { instruments } from '../products/app.js';
import findProducts from '../shopping-cart/find-by-id.js';

const button = document.querySelectorAll('button');
for (let i = 0; i < instruments.length; i++) {
    button[i].className = instruments[i].code;

    
    button[i].addEventListener('click', function() {
        console.log(button[i].className); 

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }

        let lineItem = findProducts(instruments, cart.code);

        if (!lineItem) {
            lineItem = {
                code: instruments.code,
                quantity: 1
            };
            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;

            console.log(lineItem + 'added to cart');
        }
        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

    });
