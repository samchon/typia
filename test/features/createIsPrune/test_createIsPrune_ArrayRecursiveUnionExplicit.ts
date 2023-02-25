import typia from "../../../src";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ArrayRecursiveUnionExplicit = _test_isPrune(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createIsPrune<ArrayRecursiveUnionExplicit>(),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
