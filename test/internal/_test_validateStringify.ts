import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export function _test_validateStringify<T>(
    name: string,
    generator: () => T,
    validator: (input: T) => typia.IValidation<string>,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const input: T = generator();
        const valid: typia.IValidation<string> = validator(input);
        if (valid.success === false)
            throw new Error(
                `Bug on typia.validateStringify(): failed to understand the ${name} type.`,
            );

        if (predicate(input, valid.data) === false) {
            throw new Error(
                `Bug on typia.validateStringify(): failed to understand the ${name} type.`,
            );
        }

        const wrong: ISpoiled[] = [];
        for (const spoil of spoilers ?? []) {
            const elem: T = generator();
            const expected: string[] = spoil(elem);
            const valid: typia.IValidation<string> = validator(elem);

            if (valid.success === true)
                throw new Error(
                    `Bug on typia.validateStringify(): failed to detect error on the ${name} type.`,
                );

            typia.assert(valid);
            expected.sort();
            valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

            if (
                valid.errors.length !== expected.length ||
                valid.errors.every((e, i) => e.path === expected[i]) === false
            )
                wrong.push({
                    expected,
                    solution: valid.errors.map((e) => e.path),
                });
        }
        if (wrong.length !== 0) {
            console.log(wrong);
            throw new Error(
                `Bug on typia.validateStringify(): failed to detect error on the ${name} type.`,
            );
        }
    };
}

interface ISpoiled {
    expected: string[];
    solution: string[];
}

function predicate<T>(data: any, optimized: string): boolean {
    // SPECIAL CASE, UNDEFINED
    if (
        optimized === undefined &&
        (data === undefined ||
            typeof data === "function" ||
            (data.toJSON && data.toJSON() === undefined))
    )
        return true;

    // DO COMPARE
    const parsed: T = JSON.parse(optimized);
    const expected: T = JSON.parse(JSON.stringify(data));

    return primitive_equal_to(parsed, expected);
}
