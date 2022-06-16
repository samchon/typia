import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert } from "./_test_assert";

export const test_assert_object_recursive = _test_assert(
    "recursive object",
    ObjectRecursive.generate(),
    (input) => TSON.assert(input),
    [
        {
            ...ObjectRecursive.generate(),
            name: 3 as any as string,
        },
    ],
);
