import typia from "typia";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ArrayRecursive = _test_assert(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assert(input),
    ArrayRecursive.SPOILERS,
);
