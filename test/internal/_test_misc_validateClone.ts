import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_clone } from "../helpers/primitive_clone";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_misc_validateClone =
    <T>(factory: TestStructure<T>) =>
    (clone: (input: T) => typia.IValidation<typia.Primitive<T>>) =>
    () => {
        const input: T = factory.generate();
        const replica: typia.Primitive<T> = primitive_clone(input);
        const valid: typia.IValidation<typia.Primitive<T>> = clone(input);
        if (valid.success === false)
            throw new Error(
                `Bug on typia.validateClone(): failed to understand the ${factory.constructor.name} type.`,
            );

        if (primitive_equal_to(replica, valid.data) === false) {
            throw new Error(
                `Bug on typia.assertStringify(): failed to understand the ${factory.constructor.name} type.`,
            );
        }

        const wrong: ISpoiled[] = [];
        for (const spoil of factory.SPOILERS || []) {
            const elem: T = factory.generate();
            const expected: string[] = spoil(elem);
            const valid: typia.IValidation<typia.Primitive<T>> = clone(elem);

            if (valid.success === true)
                throw new Error(
                    `Bug on typia.validateClone(): failed to detect error on the ${factory.constructor.name} type.`,
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
        if (wrong.length !== 0)
            throw new Error(
                `Bug on typia.validateClone(): failed to detect error on the ${factory.constructor.name} type.`,
            );
    };

interface ISpoiled {
    expected: string[];
    actual: string[];
}
