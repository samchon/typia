import typia from "../../../src";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_ArrayRecursiveUnionImplicit = _test_isPrune(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.isPrune(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
