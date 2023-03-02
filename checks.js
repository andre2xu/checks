import * as nprim_checks from './core/non_primitives.js';
import * as prim_checks from './core/primitives.js';
import * as ds_checks from './core/data_structures.js';
import * as num_checks from './core/numbers.js';

export var checks = Object.assign({}, nprim_checks, prim_checks, ds_checks, num_checks);
