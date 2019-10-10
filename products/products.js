import { renderInstrument } from './renderfunction.js';
import { instruments } from './app.js';

const list = document.getElementById('instrument');

for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    const dom = renderInstrument(instrument);
    list.appendChild(dom);
}

