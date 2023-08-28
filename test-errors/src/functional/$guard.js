"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$guard = void 0;
const TypeGuardError_1 = require("../TypeGuardError");
/* -----------------------------------------------------------
    ASSERT V2 -> USE (NULL OR ERROR) CONDITION
----------------------------------------------------------- */
// /**
//  * @internal
//  */
// export const $guardV2 =
//     (method: string) => (props: Omit<TypeGuardError.IProps, "method">) =>
//         new TypeGuardError({
//             method,
//             path: props.path,
//             expected: props.expected,
//             value: props.value,
//         });
/* -----------------------------------------------------------
    ASSERT V3 -> (CONDITION OR THROW(exceptable): FALSE)
----------------------------------------------------------- */
/**
 * @internal
 */
const $guard = (method) => (exceptionable, props) => {
    if (exceptionable === true)
        throw new TypeGuardError_1.TypeGuardError({
            method,
            path: props.path,
            expected: props.expected,
            value: props.value,
        });
    return false;
};
exports.$guard = $guard;
