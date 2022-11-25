import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ArrayRecursiveUnionImplicit = _test_isStringify(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => TSON.isStringify(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);