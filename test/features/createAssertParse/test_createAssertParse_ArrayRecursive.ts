import typia from "typia";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayRecursive = _test_assertParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createAssertParse<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
