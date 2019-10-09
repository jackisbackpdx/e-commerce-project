const acousticGuitar = {
    code: 'Acoustic Guitar',
    name: 'Acoustic Guitar',
    image: '../images/acousticguitar.jpg',
    description: 'Wooden acoustic guitar with wonderful melodic frequencies and harminous tones',
    category: 'Guitar',
    price: 79.99,
    salePrice: 69.99,
    calcDiscount: function() {
        return Math.floor(((this.price - this.salePrice) / this.price) * 100);
    }
};
const audioInterface = {
    code: 'Audio Interface',
    name: 'Subatomic Audio Interface',
    image: '../images/audiointerface.jpg',
    description: 'This is a high quality instrument transmission device',
    category: 'Audio Interface',
    price: 94.99,
    salePrice: 74.99,
    calcDiscount: function() {
        return Math.floor(((this.price - this.salePrice) / this.price) * 100);
    }
};
const drumPad = {
    code: 'Electric Drum Pad',
    name: '9800 Martin\'s Drum Pad',
    image: '../images/drumpad.jpg',
    description: 'Electric drum pad operated by pressing buttons',
    category: 'Drums',
    price: 59.99,
    salePrice: 49.99,
    calcDiscount: function() {
        return Math.floor(((this.price - this.salePrice) / this.price) * 100);
    }
};
const electricGuitar = {
    code: 'Electric Guitar',
    name: 'Fender Guitar',
    image: '../images/electricguitar.jpg',
    description: 'Rock out to some riffs',
    category: 'Guitar',
    price: 89.99,
    salePrice: 79.99,
    calcDiscount: function() {
        return Math.floor(((this.price - this.salePrice) / this.price) * 100);
    }
};
const focusrite = {
    code: 'Focusrite',
    name: 'Focusrite Audio Interface',
    image: '../images/focusrite.jpg',
    description: 'Electric drum pad operated by pressing buttons',
    category: 'Drums',
    price: 59.99,
    salePrice: 49.99,
    calcDiscount: function() {
        return Math.floor(((this.price - this.salePrice) / this.price) * 100);
    }
};
const drumKit = {
    code: 'Drum Kit',
    name: 'Focusrite Audio Interface',
    image: '../images/drumkit.jpeg',
    description: 'Electric drum pad operated by pressing buttons',
    category: 'Drums',
    price: 59.99,
    salePrice: 49.99,
    calcDiscount: function() {
        return Math.floor(((this.price - this.salePrice) / this.price) * 100);
    }
};

export const instruments = [
    acousticGuitar,
    audioInterface,
    drumPad,
    electricGuitar,
    focusrite,
    drumKit
];


export const cart = [{
    code: 'Acoustic Guitar',
    quantity: 1
}, {
    code: 'Audio Interface',
    quantity: 2
}, {
    code: 'Focusrite',
    quantity: 4
}, {
    code: 'Drum Kit',
    quantity: 1
}];