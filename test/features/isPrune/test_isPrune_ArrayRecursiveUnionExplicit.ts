import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_isPrune_ArrayRecursiveUnionExplicit = _test_isPrune(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.isPrune(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
