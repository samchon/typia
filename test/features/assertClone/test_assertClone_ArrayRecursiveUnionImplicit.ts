import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayRecursiveUnionImplicit = _test_assertClone(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => TSON.assertClone(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
