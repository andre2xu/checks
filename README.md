# Checks.js
This is a module that contains helper functions for validating data in JavaScript. The functions that start with ***is*** return a bool and those that start with ***checkIf*** throw an error. See 'core' for reference.<br><br> 

## Example:
```javascript
import * as checks from 'path/to/checks.js';

checks.isFunction(arg);

// OR

checks.checkIfFunction(arg1, ...);
```
<br>

**Note:** *not all of the helpers start with 'is' or 'checkIf'. Please see core/README.md for more info.*<br><br>