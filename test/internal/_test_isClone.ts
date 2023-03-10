import { Primitive } from "typia/lib/Primitive";

import { Spoiler } from "../helpers/Spoiler";
import { primitive_clone } from "../helpers/primitive_clone";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export function _test_isClone<T>(
    name: string,
    generator: () => T,
    cloner: (input: T) => Primitive<T> | null,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const data: T = generator();
        const replica: Primitive<T> = primitive_clone(data);
        const cloned: Primitive<T> | null = cloner(data);

        if (primitive_equal_to(replica, cloned) === false) {
            throw new Error(
                `Bug on TSON.isClone(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of spoilers || []) {
            const elem: T = generator();
            spoil(elem);

            if (cloner(elem) !== null)
                throw new Error(
                    `Bug on TSON.isClone(): failed to detect error on the ${name} type.`,
                );
        }
    };
}
