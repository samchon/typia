import typia from "typia";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayRecursive = _test_assertStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createAssertStringify<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
