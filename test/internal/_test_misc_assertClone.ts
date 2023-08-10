import { Primitive, TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_clone } from "../helpers/primitive_clone";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_misc_assertClone =
    <T>(factory: TestStructure<T>) =>
    (clone: (input: T) => Primitive<T>) =>
    () => {
        const input: T = factory.generate();
        const replica: Primitive<T> = JSON.parse(JSON.stringify(input));
        const cloned: Primitive<T> = primitive_clone(input);

        if (primitive_equal_to(replica, cloned) === false) {
            throw new Error(
                `Bug on TSON.assertClone(): failed to understand the ${factory.constructor.name} type.`,
            );
        }

        for (const spoil of factory.SPOILERS || []) {
            const elem: T = factory.generate();
            const expected: string[] = spoil(elem);
            try {
                clone(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && expected.includes(exp.path) === true)
                        continue;
                    else
                        console.log({
                            actual: exp.path,
                            expected,
                        });
            }
            throw new Error(
                `Bug on TSON.assertClone(): failed to detect error on the ${factory.constructor.name} type.`,
            );
        }
    };
