import { TypeGuardError } from "../../../src";

export function _test_assert_for_of<T>(
    name: string,
    generator: () => T[],
    assert: (input: T) => T,
    spoilers?: Array<(elem: T) => void>,
): () => void {
    return () => {
        for (const input of generator())
            try {
                if (input !== assert(input))
                    throw new Error(
                        "Bug on TSON.assertType(): failed to return input value.",
                    );
            } catch (exp) {
                if (exp instanceof TypeGuardError) {
                    console.log(exp.path, exp.value);
                    throw new Error(
                        `Bug on TSON.assertType(): failed to understand the ${name} type.`,
                    );
                } else throw exp;
            }

        for (const spoil of spoilers || []) {
            const data: T[] = generator();
            for (const elem of data)
                try {
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
