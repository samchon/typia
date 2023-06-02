import typia from "../../../src";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_ArrayRecursive = _test_assertPrune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assertPrune(input),
    ArrayRecursive.SPOILERS,
);
