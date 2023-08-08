import TSON from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { primitive_clone } from "../helpers/primitive_clone";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export function _test_misc_validateClone<T>(
    name: string,
    generator: () => T,
    validator: (input: T) => TSON.IValidation<TSON.Primitive<T>>,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const input: T = generator();
        const replica: TSON.Primitive<T> = primitive_clone(input);
        const valid: TSON.IValidation<TSON.Primitive<T>> = validator(input);
        if (valid.success === false)
            throw new Error(
                `Bug on TSON.validateClone(): failed to understand the ${name} type.`,
            );

        if (primitive_equal_to(replica, valid.data) === false) {
            throw new Error(
                `Bug on TSON.assertStringify(): failed to understand the ${name} type.`,
            );
        }

        const wrong: ISpoiled[] = [];
        for (const spoil of spoilers || []) {
            const elem: T = generator();
            const expected: string[] = spoil(elem);
            const valid: TSON.IValidation<TSON.Primitive<T>> = validator(elem);

            if (valid.success === true)
                throw new Error(
                    `Bug on TSON.validateClone(): failed to detect error on the ${name} type.`,
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
                    actual: valid.errors.map((e) => e.path),
                });
        }
        if (wrong.length !== 0)
            throw new Error(
                `Bug on TSON.validateClone(): failed to detect error on the ${name} type.`,
            );
    };
}

interface ISpoiled {
    expected: string[];
    actual: string[];
}
