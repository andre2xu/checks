export function isString(arg) {
    return typeof arg === 'string';
};

export function checkIfString(arg) {
    if (isString(arg) === false) {
        throw TypeError("Not a string");
    }
};
