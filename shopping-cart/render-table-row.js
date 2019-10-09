import { makePrettyPrice } from './make-pretty-price.js';

export const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};



const makeTr = (instrument, order) => {
    const tableRow = document.createElement('tr');

    const price = instrument.price;
    const prettyPrice = makePrettyPrice(price);
    const totalPrice = order.quantity * instrument.price;
    const prettyTotal = makePrettyPrice(totalPrice);

    tableRow.appendChild(makeTd(instrument.name));
    tableRow.appendChild(makeTd(order.quantity));
    tableRow.appendChild(makeTd(prettyPrice));
    tableRow.appendChild(makeTd(prettyTotal));
    return tableRow;
};

export { makeTr as default };