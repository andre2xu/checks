import {
    checkIfNumber
} from './numbers.js';



export function isBoolean(arg) {
    return typeof arg === 'boolean';
};

export function checkIfBoolean(arg) {
    if (isBoolean(arg) === false) {
        throw TypeError("Not a boolean");
    }
};



export function isFloatingPoint(arg) {
    checkIfNumber(arg);

    if (arg % 1 !== 0) {
        return true;
    }

    return false;
};

export function checkIfFloatingPoint(arg) {
    if (isFloatingPoint(arg) === false) {
        throw TypeError("Not a floating point number");
    }
};
