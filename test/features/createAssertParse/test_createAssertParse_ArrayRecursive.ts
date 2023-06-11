import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createAssertParse_ArrayRecursive = _test_assertParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createAssertParse<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
