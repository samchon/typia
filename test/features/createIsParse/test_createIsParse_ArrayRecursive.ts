import typia from "../../../src";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArrayRecursive = _test_isParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createIsParse<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
