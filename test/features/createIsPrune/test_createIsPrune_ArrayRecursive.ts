import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ArrayRecursive = _test_isPrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createIsPrune<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
