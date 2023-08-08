import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_isClone_ArrayRecursiveUnionExplicit = _test_misc_isClone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.misc.isClone(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
