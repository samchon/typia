"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$every = void 0;
const $every = (array, pred) => {
    let error = null;
    for (let i = 0; i < array.length; ++i)
        if (null !== (error = pred(array[i], i)))
            return error;
    return null;
};
exports.$every = $every;
