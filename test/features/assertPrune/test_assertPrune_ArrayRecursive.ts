import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertPrune_ArrayRecursive = _test_assertPrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assertPrune<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);
