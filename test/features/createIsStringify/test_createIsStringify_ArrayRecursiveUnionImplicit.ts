import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ArrayRecursiveUnionImplicit = _test_isStringify(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    TSON.createIsStringify<ArrayRecursiveUnionImplicit>(),
    ArrayRecursiveUnionImplicit.SPOILERS,
);