import typia from "typia";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayRecursive = _test_assertStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assertStringify(input),
    ArrayRecursive.SPOILERS,
);
