export function isArray(arg) {
    return arg.constructor === Array;
};

export function checkIfArray(arg) {
    if (isArray(arg) === false) {
        throw TypeError("Not an array");
    }
};



export function isKeyValueObject(arg) {
    return arg.constructor === Object && isClass(arg) === false;
};

export function checkIfKeyValueObject(arg) {
    if (isKeyValueObject(arg) === false) {
        throw TypeError("Not a key value object");
    }
};
