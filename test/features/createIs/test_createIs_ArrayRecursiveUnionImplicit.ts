import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArrayRecursiveUnionImplicit = _test_is(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    TSON.createIs<ArrayRecursiveUnionImplicit>(),
    ArrayRecursiveUnionImplicit.SPOILERS,
);