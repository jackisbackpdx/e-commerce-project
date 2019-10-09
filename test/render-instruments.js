import renderInstrument from '../products/renderfunction.js';
import renderTableRow from '../shopping-cart/render-table-row.js';

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
    const expected = `<li class="Guitar" title="Wooden acoustic guitar with wonderful melodic frequencies and harminous tones"><h3>Acoustic Guitar</h3><img src="../images/acousticguitar.jpg" alt="Acoustic Guitar image"><p class="price">$75.00</p><p class="saleprice">$55.00</p><p class="discount">26% off!</p><button>Add to Cart</button></li>`;
    
    const dom = renderInstrument(acousticGuitar);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});

test('renders a table row', assert => {
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
        code: 'guitar',
        quantity: 2
    };


    // act
    const expected = `<tr><td>guitar</td><td>2</td><td>$55</td><td>$180</td></tr>`;
    
    const dom = renderTableRow(cart, acousticGuitar);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});
