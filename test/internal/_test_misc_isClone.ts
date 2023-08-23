import { Resolved } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_misc_isClone =
    (name: string) =>
    <T>(factory: TestStructure<T>) =>
    (clone: (input: T) => Resolved<T> | null) =>
    () => {
        const data: T = factory.generate();
        const cloned: Resolved<T> | null = clone(data);

        if (resolved_equal_to(name)(data, cloned!) === false) {
            throw new Error(
                `Bug on typia.isClone(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of factory.SPOILERS || []) {
            const elem: T = factory.generate();
            spoil(elem);

            if (clone(elem) !== null)
                throw new Error(
                    `Bug on typia.isClone(): failed to detect error on the ${name} type.`,
                );
        }
    };
