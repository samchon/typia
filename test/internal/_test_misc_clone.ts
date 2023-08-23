import { Resolved } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_misc_clone =
    (name: string) =>
    <T>(factory: TestStructure<T>) =>
    (clone: (input: T) => Resolved<T>) =>
    () => {
        const data: T = factory.generate();
        const cloned: Resolved<T> = clone(data);

        if (resolved_equal_to(name)(data, cloned) === false) {
            throw new Error(
                `Bug on typia.misc.clone(): failed to clone the ${name} type.`,
            );
        }
    };
