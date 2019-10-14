import renderInstrument from '../products/renderfunction.js';
import { makeTr } from '../shopping-cart/render-table-row.js';

const test = QUnit.test;

QUnit.module('Render Instrument');

test('renders an instrument', assert => {
    // arrange
    const acousticGuitar = {
        id: 'Acoustic Guitar',
        name: 'Acoustic Guitar',
        image: '../images/acousticguitar.jpg',
        description: 'Wooden acoustic guitar with wonderful melodic frequencies and harminous tones',
        category: 'Guitar',
        price: 75.00,
        salePrice: 55.00,
        calcDiscount: function() {
            return Math.floor(((this.price - this.salePrice) / this.price) * 100);
        }
    };
    // act
    const expected = `<li class="Guitar" title="Wooden acoustic guitar with wonderful melodic frequencies and harminous tones"><h3>Acoustic Guitar</h3><img src="../images/acousticguitar.jpg" alt="Acoustic Guitar image"><p class="price">$75.00</p><p class="saleprice">$55.00</p><p class="discount">26% off!</p><input type="number" id="input"><button value="undefined" min="1">Add to Cart</button></li>`;
    
    const dom = renderInstrument(acousticGuitar);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});

test('renders a table row when given an instrument and line item (cart with an instrument)', assert => {
    // arrange
    const acousticGuitar = {
        id: 'Acoustic Guitar',
        name: 'Acoustic Guitar',
        image: '../images/acousticguitar.jpg',
        description: 'Wooden acoustic guitar with wonderful melodic frequencies and harminous tones',
        category: 'Guitar',
        price: 75.00,
        salePrice: 55.00,
        calcDiscount: function() {
            return Math.floor(((this.price - this.salePrice) / this.price) * 100);
        }
    };

    const cart = {
        code: 'Acoustic Guitar',
        quantity: 2
    };


    // act
    const expected = `<tr><td>Acoustic Guitar</td><td>2</td><td>$55.00</td><td>$110.00</td></tr>`;
    
    const dom = makeTr(acousticGuitar, cart);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});


test('calculates total price by multiplying by quantity', assert => {
    // arrange
    const acousticGuitar = {
        id: 'Acoustic Guitar',
        name: 'Acoustic Guitar',
        image: '../images/acousticguitar.jpg',
        description: 'Wooden acoustic guitar with wonderful melodic frequencies and harminous tones',
        category: 'Guitar',
        price: 75.00,
        salePrice: 55.00,
        calcDiscount: function() {
            return Math.floor(((this.price - this.salePrice) / this.price) * 100);
        }
    };

    const cart = {
        code: 'Acoustic Guitar',
        quantity: 2
    };


    // act
    const expected = 110.00;
    const totalPrice = (order, instrument) => order.quantity * instrument.salePrice;
    const acousticGuitarPrice = totalPrice(cart, acousticGuitar);

    // assert
    assert.equal(acousticGuitarPrice, expected);
});