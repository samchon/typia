import typia from "../../../src";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_ArrayRecursiveUnionImplicit = _test_validatePrune(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.validatePrune(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
