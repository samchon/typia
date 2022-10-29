import { IValidation } from "../../../src/IValidation";
import { Spoiler } from "../../internal/Spoiler";

export function _test_validate<T>(
    name: string,
    generator: () => T,
    validator: (input: T) => IValidation,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const valid = validator(generator());
        if (valid.success === false) {
            console.log(valid);
            throw new Error(
                `Bug on TSON.validate(): failed to understand the ${name} type.`,
            );
        }

        const wrong: ISpoiled[] = [];
        for (const spoil of spoilers || []) {
            const elem: T = generator();
            const expected: string[] = spoil(elem);
            const { errors } = validator(elem);

            expected.sort();
            errors.sort((x, y) => (x.path < y.path ? -1 : 1));

            if (
                errors.length !== expected.length ||
                errors.every((e, i) => e.path === expected[i]) === false
            )
                wrong.push({
                    expected,
                    solution: errors.map((e) => e.path),
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
