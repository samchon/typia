import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_array_recursive = _test_assert(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.assert(input),
    ArrayRecursive.SPOILERS,
);
