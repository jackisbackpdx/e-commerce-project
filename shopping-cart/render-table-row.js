import { makePrettyPriceUSD } from './make-pretty-price.js';


export const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};



export const makeTr = (instrument, order) => {
    const tableRow = document.createElement('tr');
    
    const price = instrument.salePrice;
    const prettyPrice = makePrettyPriceUSD(price);
    const totalPrice = order.quantity * instrument.salePrice;
    const prettyTotal = makePrettyPriceUSD(totalPrice);
    
    tableRow.appendChild(makeTd(instrument.name));
    tableRow.appendChild(makeTd(order.quantity));
    tableRow.appendChild(makeTd(prettyPrice));
    tableRow.appendChild(makeTd(prettyTotal));

    return tableRow;
};


