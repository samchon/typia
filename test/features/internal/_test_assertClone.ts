import { Primitive, TypeGuardError } from "typia";

import { Spoiler } from "../../internal/Spoiler";
import { primitive_clone } from "../../internal/primitive_clone";
import { primitive_equal_to } from "../../internal/primitive_equal_to";

export function _test_assertClone<T>(
    name: string,
    generator: () => T,
    cloner: (input: T) => Primitive<T>,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const input: T = generator();
        const replica: Primitive<T> = JSON.parse(JSON.stringify(input));
        const cloned: Primitive<T> = primitive_clone(input);

        if (primitive_equal_to(replica, cloned) === false) {
            throw new Error(
                `Bug on TSON.assertClone(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of spoilers || []) {
            const elem: T = generator();
            const paths = spoil(elem);
            try {
                cloner(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && paths.includes(exp.path) === true) continue;
                    else
                        console.log({
                            input: paths,
                            expected: exp.path,
                        });
            }
            throw new Error(
                `Bug on TSON.assertClone(): failed to detect error on the ${name} type.`,
            );
        }
    };
}
