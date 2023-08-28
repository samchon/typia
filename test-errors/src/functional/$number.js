"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$number = void 0;
const TypeGuardError_1 = require("../TypeGuardError");
const $number = (value) => {
    if (isFinite(value) === false)
        throw new TypeGuardError_1.TypeGuardError({
            method: "typia.json.stringify",
            expected: "number",
            value,
            message: "Error on typia.json.stringify(): infinite or not a number.",
        });
    return value;
};
exports.$number = $number;
