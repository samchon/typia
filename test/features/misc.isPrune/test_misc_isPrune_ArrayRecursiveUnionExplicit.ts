import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_isPrune_ArrayRecursiveUnionExplicit = _test_misc_isPrune(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.misc.isPrune(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
