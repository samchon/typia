import typia from "../../../src";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ArrayRecursive = _test_isParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.isParse<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);
