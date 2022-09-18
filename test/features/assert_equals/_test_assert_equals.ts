import { TypeGuardError } from "../../../src";

export function _test_assert_equals<T>(
    name: string,
    generator: () => T,
    assert: (input: T) => T,
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
            if (exp instanceof TypeGuardError) {
                console.log(exp);
                console.log(exp.value);
                throw new Error(
                    `Bug on TSON.assertType(): failed to understand the ${name} type.`,
                );
            } else throw exp;
        }
    };
}
