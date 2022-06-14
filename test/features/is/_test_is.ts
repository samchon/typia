import { TypeGuardError } from "../../../src";

export function _test_is<T, U extends T>(
    name: string,
    data: T,
    checker: (input: T) => boolean,
    wrong?: U[],
): () => void {
    return () => {
        if (checker(data) === false)
            throw new Error(
                `Bug on TSON.is(): failed to understand the ${name} type.`,
            );

        if ((wrong || []).some((elem) => checker(elem)))
            throw new Error(
                `Bug on TSON.assert(): failed to detect error on the ${name} type.`,
            );
    };
}
