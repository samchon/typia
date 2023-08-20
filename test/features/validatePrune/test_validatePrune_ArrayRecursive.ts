import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_validatePrune_ArrayRecursive = _test_validatePrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.validatePrune<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);
