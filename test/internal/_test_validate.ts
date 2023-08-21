import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_validate =
    (name: string) =>
    <T>(factory: TestStructure<T>) =>
    (validate: (input: T) => typia.IValidation<T>) =>
    () => {
        const input: T = factory.generate();
        const valid: typia.IValidation<unknown> = validate(input);
        if (valid.success === false)
            throw new Error(
                `Bug on typia.validate(): failed to understand the ${name} type.`,
            );
        else if (valid.data !== input)
            throw new Error(
                "Bug on typia.validate(): failed to archive the input value.",
            );
        typia.assert(valid);

        const wrong: ISpoiled[] = [];
        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            const expected: string[] = spoil(elem);
            const valid: typia.IValidation<T> = validate(elem);

            if (valid.success === true)
                throw new Error(
                    `Bug on typia.validate(): failed to detect error on the ${name} type.`,
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
                    actual: valid.errors.map((e) => e.path),
                });
        }
        if (wrong.length !== 0) {
            console.log(wrong);
            throw new Error(
                `Bug on typia.validate(): failed to detect error on the ${name} type.`,
            );
        }
    };

interface ISpoiled {
    expected: string[];
    actual: string[];
}
