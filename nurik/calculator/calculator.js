
const OPERATIONS = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divison: '/',
};

function calculate({ a, b, operation }) {

    switch (operation) {

        case OPERATIONS.substract:
            return substract(a, b);

        case OPERATIONS.sum:
            return sum(a, b);

        case OPERATIONS.multiply:
            return multiply(a, b);

        case OPERATIONS.divison:
            if (b === 0) {
                return 'На ноль делить нельзя!';
            }
            return divison(a, b);

        default:
            return 'Неизвестная операция';
    }
}
