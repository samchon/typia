import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ArrayRecursiveUnionImplicit = _test_isClone(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => TSON.isClone(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);