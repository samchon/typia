import { TypeGuardError } from "../../../src";

export function _test_assert<T>(
    name: string,
    generator: () => T,
    assert: (input: T) => T,
    spoilers?: Array<(elem: T) => any>,
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
            const path = { value: "" as string | void };
            const elem: T = generator();
            try {
                path.value = spoil(elem);
                assert(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (
                        typeof path.value !== "string" ||
                        exp.path === path.value
                    )
                        continue;
                    else
                        console.log({
                            input: path.value,
                            expected: exp.path,
                            value: elem,
                        });
            }
            throw new Error(
                `Bug on TSON.assertType(): failed to detect error on the ${name} type.`,
            );
        }
    };
}
