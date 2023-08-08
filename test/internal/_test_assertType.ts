import { TypeGuardError } from "typia";

import { Spoiler } from "../helpers/Spoiler";

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

        for (const spoil of spoilers ?? []) {
            const elem: T = generator();
            const paths: string[] = spoil(elem);
            try {
                assert(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && paths.includes(exp.path) === true) continue;
                    else
                        console.log({
                            expected: exp.path,
                            actual: paths,
                        });
            }
            throw new Error(
                `Bug on typia.assertType(): failed to detect error on the ${name} type.`,
            );
        }
    };
}
