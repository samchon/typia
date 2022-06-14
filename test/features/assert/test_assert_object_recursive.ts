import TSON from "../../../src";
import { IObjectRecursive } from "../../structures/IObjectRecursive";
import { _test_assert } from "./_test_assert";

export const test_assert_object_recursive = _test_assert(
    "recursive object",
    IObjectRecursive.generate(),
    (input) => TSON.assert(input),
    [
        {
            ...IObjectRecursive.generate(),
            name: 3 as any as string,
        },
    ],
);
