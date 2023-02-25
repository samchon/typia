import typia from "../../../src";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ArrayRecursiveUnionExplicit = _test_assertPrune(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.assertPrune(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
