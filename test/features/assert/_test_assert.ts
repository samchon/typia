import { TypeGuardError } from "../../../src";

export function _test_assert<T, U extends T>(
    name: string,
    data: T,
    assert: (input: T) => void,
    wrong?: U[],
): () => void {
    return () => {
        try {
            assert(data);
        } catch (exp) {
            if (exp instanceof TypeGuardError) console.log(exp.path, exp.value);
            else console.log(exp);
            throw new Error(
                `Bug on TSON.assert(): failed to understand the ${name} type.`,
            );
        }

        for (const elem of wrong || []) {
            try {
                assert(elem);
            } catch {
                continue;
            }
            throw new Error(
                `Bug on TSON.assert(): failed to detect error on the ${name} type.`,
            );
        }
    };
}
