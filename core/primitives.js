export function isBoolean(arg) {
    return typeof arg === 'boolean';
};

export function checkIfBoolean(arg) {
    if (isBoolean(arg) === false) {
        throw TypeError("Not a boolean");
    }
};
