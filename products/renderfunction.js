import findProducts from '../shopping-cart/find-by-id.js';

const renderInstrument = (instrument) => {
    const li = document.createElement('li');
    li.classList = instrument.category;
    li.title = instrument.description;

    const h3 = document.createElement('h3');
    h3.textContent = instrument.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = instrument.image;
    img.alt = instrument.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + instrument.price.toFixed(2);
    p.textContent = usd;
    li.appendChild(p);

    const saleP = document.createElement('p');
    saleP.className = 'saleprice';

    const saleUsd = '$' + instrument.salePrice.toFixed(2);
    saleP.textContent = saleUsd;
    li.appendChild(saleP);

    const discountP = document.createElement('p');
    discountP.className = 'discount';

    const discount = `${instrument.calcDiscount()}% off!`;
    discountP.textContent = discount;
    li.appendChild(discountP);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = instrument.code;
    button.addEventListener('click', function() { 

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }

        let lineItem = findProducts(cart, instrument.code);
        
        if (!lineItem) {

            lineItem = {
                code: instrument.code,
                quantity: 1
            };

            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
            
        }
        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);
    });

    li.appendChild(button);
    
    return li;
};

export default renderInstrument;
