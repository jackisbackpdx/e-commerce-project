import renderInstrument from '../renderfunction.js';

const test = QUnit.test;

QUnit.module('Render Instrument');

test('renders an instrument', assert => {
    // arrange
    const acousticGuitar = {
        id: 'acoustic guitar',
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
    const expected = `<li class="Guitar" title="Wooden acoustic guitar with wonderful melodic frequencies and harminous tones"><h3>Acoustic Guitar</h3><img src="../images/acousticguitar.jpg" alt="Acoustic Guitar image"><p class="price">$75.00</p><p class="sale price">$55.00</p><button>Add to Cart</button></li>`;

    // act
    const dom = renderInstrument(acousticGuitar);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});