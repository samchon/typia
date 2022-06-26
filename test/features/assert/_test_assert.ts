import { TypeGuardError } from "../../../src";

export function _test_assert<T>(
    name: string,
    generator: () => T,
    assert: (input: T) => T,
    spoilers?: Array<(elem: T) => void>,
): () => void {
    return () => {
        try {
            const input: T = generator();
            const output: T = assert(input);

            if (input !== output)
                throw new Error(
                    "Bug on TSON.assertType(): failed to return input value.",
                );
        } catch (exp) {
            if (exp instanceof TypeGuardError)
                throw new Error(
                    `Bug on TSON.assertType(): failed to understand the ${name} type.`,
                );
            else throw exp;
        }

        for (const spoil of spoilers || []) {
            try {
                const elem: T = generator();
                spoil(elem);
                assert(elem);
            } catch {
                continue;
            }
            throw new Error(
                `Bug on TSON.assertType(): failed to detect error on the ${name} type.`,
            );
        }
    };
}
