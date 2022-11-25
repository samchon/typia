import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ArrayRecursive = _test_assert(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createAssert<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
