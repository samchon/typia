import { Primitive } from "typia/lib/Primitive";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_clone } from "../helpers/primitive_clone";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_misc_clone =
    <T>(factory: TestStructure<T>) =>
    (clone: (input: T) => Primitive<T>) =>
    () => {
        const data: T = factory.generate();
        const cloned: Primitive<T> = clone(data);
        const primitived: Primitive<T> = primitive_clone(data);

        if (primitive_equal_to(cloned, primitived) === false) {
            throw new Error(
                `Bug on typia.misc.clone(): failed to clone the ${factory.constructor.name} type.`,
            );
        }
    };
