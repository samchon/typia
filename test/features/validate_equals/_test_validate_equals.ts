import { Escaper } from "../../../src/utils/Escaper";

import { IValidation } from "../../../src/IValidation";

export function _test_validate_equals<T>(
    name: string,
    generator: () => T,
    assert: (input: T) => IValidation,
    doSpoil: boolean = true,
): () => void {
    return () => {
        const input: T = generator();

        // EXACT TYPE
        const { success }: IValidation = assert(input);
        if (success === false)
            throw new Error(
                `Bug on TSON.validateEquals(): failed to understand the ${name} type.`,
            );

        if (doSpoil === false) return;

        // EXPECTED
        const expected: string[] = (() => {
            const accessors: string[] = [];
            spoil(accessors, "$input", input);
            return accessors.sort();
        })();

        // SOLUTION
        const solution: string[] = assert(input)
            .errors.map((err) => err.path)
            .sort();

        // COMPARE
        if (
            expected.length !== solution.length ||
            expected.every((str, i) => str === solution[i]) === false
        ) {
            console.log(expected);
            console.log(solution);
            throw new Error(
                `Bug on TSON.validateEquals(): failed to detect surplus property on the ${name} type.`,
            );
        }
    };
}

function spoil(accessors: string[], path: string, input: any): void {
    if (Array.isArray(input)) spoil_array(accessors, path, input);
    else if (typeof input === "object" && input !== null)
        spoil_object(accessors, path, input);
}

function spoil_object(accessors: string[], path: string, obj: any): void {
    obj[KEY] = KEY;
    accessors.push(`${path}.${KEY}`);

    for (const [key, value] of Object.entries(obj))
        spoil(
            accessors,
            Escaper.variable(key)
                ? `${path}.${key}`
                : `${path}[${JSON.stringify(key)}]`,
            value,
        );
}

function spoil_array(accessors: string[], path: string, array: any[]): void {
    array.forEach((elem, i) => spoil(accessors, `${path}[${i}]`, elem));
}

const KEY = "non_regular_member";
