import TSON from "../../../src";
import { Spoiler } from "../../internal/Spoiler";

export function _test_validate<T>(
    name: string,
    generator: () => T,
    validator: (input: T) => TSON.IValidation<T>,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const input: T = generator();
        const valid: TSON.IValidation<unknown> = validator(input);
        if (valid.success === false)
            throw new Error(
                `Bug on TSON.validate(): failed to understand the ${name} type.`,
            );
        else if (valid.data !== input)
            throw new Error(
                "Bug on TSON.validate(): failed to archive the input value.",
            );
        TSON.assert(valid);

        const wrong: ISpoiled[] = [];
        for (const spoil of spoilers || []) {
            const elem: T = generator();
            const expected: string[] = spoil(elem);
            const valid: TSON.IValidation<T> = validator(elem);
            if (valid.success === true)
                throw new Error(
                    `Bug on TSON.validate(): failed to detect error on the ${name} type.`,
                );

            TSON.assert(valid);
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
                `Bug on TSON.validate(): failed to detect error on the ${name} type.`,
            );
        }
    };
}

interface ISpoiled {
    expected: string[];
    solution: string[];
}
