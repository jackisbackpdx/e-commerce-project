const acousticGuitar = {
    id: 'acoustic guitar',
    name: 'Acoustic Guitar',
    image: './images/acousticguitar.jpg',
    description: 'Wooden acoustic guitar with wonderful melodic frequencies and harminous tones',
    category: 'Guitar',
    price: 75.00 
};
const audioInterface = {
    id: 'advanced audio interface, meant for advanced sound engineers',
    name: 'Subatomic Audio Interface',
    image: './images/audiointerface.jpg',
    description: 'This is a high quality instrument transmission device',
    category: 'Audio Interface',
    price: 95.00
};
const drumPad = {
    id: 'Electric Drum Pad',
    name: '9800 Martin\'s Drum Pad',
    image: './images/drumpad.jpg',
    description: 'Electric drum pad operated by pressing buttons',
    category: 'Drums',
    price: 59.95
};

const instruments = [
    acousticGuitar,
    audioInterface,
    drumPad
];

export default instruments;

