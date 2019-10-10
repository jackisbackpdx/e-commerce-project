const findProducts = (instruments, code) => {
    for (let i = 0; i < instruments.length; i++) {
        const instrument = instruments[i];
        if (instrument.code === code) {
            return instrument;
        }
    }
    return null;
};

export default findProducts;

export const calcLineTotal = (quantity, price) => {
    return Number((quantity * price));
};
