import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_validatePrune_ArrayRecursive = _test_misc_validatePrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.misc.validatePrune(input),
    ArrayRecursive.SPOILERS,
);
