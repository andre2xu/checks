import {
    checkIfString,
    isClass
} from './non_primitives.js';



export function isArray(arg) {
    return arg.constructor === Array;
};

export function checkIfArray(arg) {
    if (isArray(arg) === false) {
        throw TypeError("Not an array");
    }
};



export function arrayHasXNumberOfElements(array, x) {
    checkIfArray(array);

    if (x < 0) {
        throw TypeError("X must be equal to or greater than 0.");
    }

    return array.length === x;
};

export function checkIfArrayHasXNumberOfElements(array, x) {
    if (arrayHasXNumberOfElements(array, x) === false) {
        throw Error("The given array does not have " + x + " element(s)");
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



export function keyExistsInKeyValueObject(key, obj) {
    checkIfString(key);
    checkIfKeyValueObject(obj);

    return obj[key] !== undefined;
};

export function checkIfKeyExistsInKeyValueObject(key, obj) {
    if (keyExistsInKeyValueObject(key, obj) === false) {
        throw ReferenceError(key + " does not exist in the key value object given.");
    }
};
