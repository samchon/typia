import { TypeGuardError } from "typia";

import { Spoiler } from "../helpers/Spoiler";

export function _test_assert<T>(
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
                    "Bug on typia.assert(): failed to return input value.",
                );
        } catch (exp) {
            if (exp instanceof TypeGuardError) {
                console.log(exp);
                throw new Error(
                    `Bug on typia.assert(): failed to understand the ${name} type.`,
                );
            } else throw exp;
        }

        for (const spoil of spoilers ?? []) {
            const elem: T = generator();
            const expected: string[] = spoil(elem);

            try {
                assert(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && expected.includes(exp.path) === true)
                        continue;
                    else
                        console.log({
                            expected: expected,
                            actual: exp.path,
                        });
            }
            throw new Error(
                `Bug on typia.assert(): failed to detect error on the ${name} type.`,
            );
        }
    };
}
