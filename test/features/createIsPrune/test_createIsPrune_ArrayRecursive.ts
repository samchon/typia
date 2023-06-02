import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createIsPrune_ArrayRecursive = _test_isPrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createIsPrune<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
