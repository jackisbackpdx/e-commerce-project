import { makePrettyPrice } from './make-pretty-price.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};



export const makeTr = (instrument, order) => {
    const tableRow = document.createElement('tr');

    const price = instrument.salePrice;
    const prettyPrice = makePrettyPrice(price);
    const totalPrice = order.quantity * instrument.salePrice;
    const prettyTotal = makePrettyPrice(totalPrice);

    tableRow.appendChild(makeTd(instrument.name));
    tableRow.appendChild(makeTd(order.quantity));
    tableRow.appendChild(makeTd(prettyPrice));
    tableRow.appendChild(makeTd(prettyTotal));
    return tableRow;
};
