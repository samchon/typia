import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayRecursiveUnionExplicit = _test_assertClone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.assertClone(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
