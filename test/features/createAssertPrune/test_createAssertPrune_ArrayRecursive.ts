import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createAssertPrune_ArrayRecursive = _test_assertPrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createAssertPrune<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
