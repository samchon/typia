import { TypeGuardError } from "../../../src";

export function _test_assert<T, U extends T>(
    name: string,
    data: T,
    asserter: (input: T) => void,
    wrong?: U[],
): () => void {
    return () => {
        try {
            asserter(data);
        } catch (exp) {
            if (exp instanceof TypeGuardError) console.log(exp.path, exp.value);
            throw new Error(
                `Bug on TSON.assert(): failed to understand the ${name} type.`,
            );
        }

        for (const elem of wrong || []) {
            try {
                asserter(elem);
            } catch {
                continue;
            }
            throw new Error(
                `Bug on TSON.assert(): failed to detect error on the ${name} type.`,
            );
        }
    };
}
