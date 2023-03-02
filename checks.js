import * as data_struct_checks from './core/data_structures.js';
import * as non_prim_checks from './core/non_primitives.js';
import * as num_checks from './core/numbers.js';
import * as prim_checks from './core/primitives.js';



const IMPORTS = [
    data_struct_checks,
    non_prim_checks,
    num_checks,
    prim_checks
];
const NUM_OF_IMPORTS = IMPORTS.length;



var checks = {};

for (let i=0; i < NUM_OF_IMPORTS; i++) {
    const CHECKS_ARRAY = Object.values(IMPORTS[i]);
    const NUM_OF_CHECKS = CHECKS_ARRAY.length;

    for (let j=0; j < NUM_OF_CHECKS; j++) {
        const CHECK = CHECKS_ARRAY[j];

        checks[CHECK.name] = CHECK;
    }
}

export default checks;
