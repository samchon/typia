import typia from "typia";

import { Primitive } from "typia/lib/Primitive";
import { primitive_clone } from "../../internal/primitive_clone";
import { primitive_equal_to } from "../../internal/primitive_equal_to";
export function _test_clone<T>(name: string, generator: () => T, cloner: (input: T) => Primitive<T>): () => void {
    return () => {
        const data: T = generator();
        const cloned: Primitive<T> = cloner(data);
        const primitived: Primitive<T> = primitive_clone(data);
        if (primitive_equal_to(cloned, primitived) === false) {
            throw new Error(`Bug on typia.clone(): failed to clone the ${name} type.`);
        }
    };
}
