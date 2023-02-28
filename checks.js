export function isString(arg) {
    return typeof arg === 'string';
};

export function checkIfString(arg) {
    if (isString(arg) === false) {
        throw TypeError("Not a string");
    }
};



export function isNumber(arg) {
    return typeof arg === 'number';
};

export function checkIfNumber(arg) {
    if (isNumber(arg) === false) {
        throw TypeError("Not a number");
    }
};



export function isPositiveNumber(arg) {
    return arg > 0;
};

export function checkIfPositiveNumber(arg) {
    checkIfNumber(arg);

    if (isPositiveNumber(arg) === false) {
        throw TypeError("Not a positive number.");
    }
};



export function isNegativeNumber(arg) {
    return arg < 0;
};

export function checkIfNegativeNumber(arg) {
    checkIfNumber(arg);

    if (isNegativeNumber(arg) === false) {
        throw TypeError("Not a negative number.");
    }
};
