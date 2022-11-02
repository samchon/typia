import { TypeGuardError } from "../TypeGuardError";

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
export const $guard =
    (method: string) =>
    (exceptionable: boolean, props: Omit<TypeGuardError.IProps, "method">) => {
        if (exceptionable === true)
            throw new TypeGuardError({
                method,
                path: props.path,
                expected: props.expected,
                value: props.value,
            });
        return false;
    };
