import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createIsParse_ArrayRecursive = _test_isParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createIsParse<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
