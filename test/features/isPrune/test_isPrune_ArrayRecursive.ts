import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ArrayRecursive = _test_isPrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.isPrune(input),
    ArrayRecursive.SPOILERS,
);