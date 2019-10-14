export const makePrettyPriceUSD = (price) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
export const makePrettyPriceEUR = (price) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
};
export const makePrettyPriceJPY = (price) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'JPY' });
};
