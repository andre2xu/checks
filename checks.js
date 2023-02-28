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



export function isZero(arg) {
    return arg === 0;
};

export function checkIfZero(arg) {
    checkIfNumber(arg);

    if (isZero(arg) === false) {
        throw TypeError("Not zero");
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



export function isFunction(arg) {
    return arg instanceof Function;
};

export function checkIfFunction(arg) {
    if (isFunction(arg) === false) {
        throw TypeError("Not a function");
    }
};



export function isClass(arg) {
    const DESCRIPTORS = Object.getOwnPropertyDescriptors(arg);

    if (DESCRIPTORS.prototype !== undefined && DESCRIPTORS.prototype.writable === false) {
        return true;
    }

    return false;
};

export function checkIfClass(arg) {
    if (isClass(arg) === false) {
        throw TypeError("Not a class");
    }
};



export function isInstanceOf(arg, parent_class) {
    if (isClass(parent_class)) {
        return arg instanceof parent_class;
    }

    return false;
};

export function checkIfInstanceOf(arg, parent_class) {
    checkIfClass(parent_class);

    if (arg instanceof parent_class === false) {
        let class_name = parent_class.toString();
        class_name = class_name.substr(6);
        class_name = class_name.substr(0, class_name.indexOf(' '));

        throw TypeError("Not an instance of " + class_name);
    }
};



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
