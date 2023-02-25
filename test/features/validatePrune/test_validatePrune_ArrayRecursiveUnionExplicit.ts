import typia from "../../../src";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ArrayRecursiveUnionExplicit = _test_validatePrune(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.validatePrune(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
