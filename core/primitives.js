export function isString(arg) {
    return typeof arg === 'string';
};

export function checkIfString(arg) {
    if (isString(arg) === false) {
        throw TypeError("Not a string");
    }
};



export function isBoolean(arg) {
    return typeof arg === 'boolean';
};

export function checkIfBoolean(arg) {
    if (isBoolean(arg) === false) {
        throw TypeError("Not a boolean");
    }
};
