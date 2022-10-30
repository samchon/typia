import { TypeGuardError } from "../TypeGuardError";

export const $every = <T>(
    array: T[],
    pred: (value: T, i: number) => null | Omit<TypeGuardError.IProps, "method">,
): null | Omit<TypeGuardError.IProps, "method"> => {
    let error: null | Omit<TypeGuardError.IProps, "method"> = null;
    for (let i: number = 0; i < array.length; ++i)
        if (null !== (error = pred(array[i]!, i))) return error;
    return null;
};
