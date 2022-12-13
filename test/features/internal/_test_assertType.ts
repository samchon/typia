import { TypeGuardError } from "../../../src";
import { Spoiler } from "../../internal/Spoiler";

export function _test_assertType<T>(
    name: string,
    generator: () => T,
    assert: (input: T) => T,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        try {
            const input: T = generator();
            const output: T = assert(input);

            if (input !== output)
                throw new Error(
                    "Bug on typia.assertType(): failed to return input value.",
                );
        } catch (exp) {
            if (exp instanceof TypeGuardError) {
                console.log(exp);
                throw new Error(
                    `Bug on typia.assertType(): failed to understand the ${name} type.`,
                );
            } else throw exp;
        }

        for (const spoil of spoilers || []) {
            const paths = { value: [] as string[] };
            const elem: T = generator();
            try {
                paths.value = spoil(elem);
                assert(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && paths.value.includes(exp.path) === true)
                        continue;
                    else
                        console.log({
                            expected: exp.path,
                            solution: paths.value,
                        });
            }
            console.log(paths.value);
            throw new Error(
                `Bug on typia.assertType(): failed to detect error on the ${name} type.`,
            );
        }
    };
}
