import { TypeGuardError } from "typia";

import { Spoiler } from "../helpers/Spoiler";

export function _test_assertPrune<T>(
    name: string,
    generator: () => T,
    pruner: (input: T) => T,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const input: T = generator();

        // SPOIL OBJECTS
        iterate((obj: any) =>
            new Array(10)
                .fill("")
                .forEach(
                    (_, i) => (obj[`__non_regular_type__${i}`] = "vulnerable"),
                ),
        )(input);

        // DO VALIDATE
        pruner(input);
        if (pruner.toString().indexOf("RegExp(/(.*)/).test") === -1)
            iterate((obj: any) => {
                if (
                    Object.keys(obj).some(
                        (key) => key.indexOf("__non_regular_type__") === 0,
                    )
                )
                    throw new Error(
                        `Bug on typia.isPrune(): failed to prune the ${name} type.`,
                    );
            })(input);

        // SPOIL
        for (const spoil of spoilers ?? []) {
            const elem: T = generator();
            const expected: string[] = spoil(elem);

            try {
                pruner(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && expected.includes(exp.path) === true)
                        continue;
                    else
                        console.log({
                            expected,
                            actual: exp.path,
                        });
            }
            throw new Error(
                `Bug on typia.assertPrune(): failed to detect error on the ${name} type.`,
            );
        }
    };
}

const iterate =
    (closure: (obj: any) => void) =>
    (input: any): void => {
        if (Array.isArray(input)) return iterate_array(closure)(input);
        else if (
            input !== null &&
            typeof input === "object" &&
            typeof input.valueOf() === "object"
        )
            return iterate_object(closure)(input);
    };

const iterate_object =
    (closure: (obj: any) => void) =>
    (input: any): void => {
        closure(input);
        for (const value of Object.values(input)) iterate(closure)(value);
    };

const iterate_array =
    (closure: (obj: any) => void) =>
    (input: any): void =>
        input.forEach((elem: any) => iterate(closure)(elem));
