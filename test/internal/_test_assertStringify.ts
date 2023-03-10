import { TypeGuardError } from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export function _test_assertStringify<T>(
    name: string,
    generator: () => T,
    converter: (input: T) => string,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const data: T = generator();
        const optimized: string = converter(data);

        if (predicate(data, optimized) === false) {
            throw new Error(
                `Bug on typia.assertStringify(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of spoilers ?? []) {
            const elem: T = generator();
            const paths: string[] = spoil(elem);

            try {
                converter(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && paths.includes(exp.path) === true) continue;
                    else
                        console.log({
                            input: paths,
                            expected: exp.path,
                        });
            }
            throw new Error(
                `Bug on typia.assertStringify(): failed to detect error on the ${name} type.`,
            );
        }
    };
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
