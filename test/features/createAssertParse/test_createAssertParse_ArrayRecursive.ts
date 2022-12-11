import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayRecursive = _test_assertParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createAssertParse<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);