import typia from "../../../src";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ArrayRecursive = _test_validatePrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createValidatePrune<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
