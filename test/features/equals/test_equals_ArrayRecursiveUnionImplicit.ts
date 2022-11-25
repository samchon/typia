import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ArrayRecursiveUnionImplicit = _test_equals(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => TSON.equals(input),
);