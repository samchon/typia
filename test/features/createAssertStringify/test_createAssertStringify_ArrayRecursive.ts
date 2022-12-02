import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayRecursive = _test_assertStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createAssertStringify<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
