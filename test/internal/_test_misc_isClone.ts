import { Primitive } from "typia/lib/Primitive";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_clone } from "../helpers/primitive_clone";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_misc_isClone =
    <T>(factory: TestStructure<T>) =>
    (clone: (input: T) => Primitive<T> | null) =>
    () => {
        const data: T = factory.generate();
        const replica: Primitive<T> = primitive_clone(data);
        const cloned: Primitive<T> | null = clone(data);

        if (primitive_equal_to(replica, cloned) === false) {
            throw new Error(
                `Bug on typia.isClone(): failed to understand the ${factory.constructor.name} type.`,
            );
        }

        for (const spoil of factory.SPOILERS || []) {
            const elem: T = factory.generate();
            spoil(elem);

            if (clone(elem) !== null)
                throw new Error(
                    `Bug on typia.isClone(): failed to detect error on the ${factory.constructor.name} type.`,
                );
        }
    };
