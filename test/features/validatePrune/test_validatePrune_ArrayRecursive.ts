import typia from "../../../src";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_ArrayRecursive = _test_validatePrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.validatePrune(input),
    ArrayRecursive.SPOILERS,
);
