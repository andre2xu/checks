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
