import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ArrayRecursive = _test_assert(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createAssert<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
