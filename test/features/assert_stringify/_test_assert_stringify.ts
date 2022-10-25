import { TypeGuardError } from "../../../src";
import { Primitive } from "../../internal/Primitive";
import { Spoiler } from "../../internal/Spoiler";

export function _test_assert_stringify<T>(
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
                `Bug on TSON.assertStringify(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of spoilers || []) {
            const paths = { value: [] as string[] };
            const elem: T = generator();
            try {
                paths.value = spoil(elem);
                converter(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && paths.value.includes(exp.path) === true)
                        continue;
                    else
                        console.log({
                            input: paths.value,
                            expected: exp.path,
                        });
            }
            throw new Error(
                `Bug on TSON.assertStringify(): failed to detect error on the ${name} type.`,
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

    return Primitive.equal_to(parsed, expected);
}
