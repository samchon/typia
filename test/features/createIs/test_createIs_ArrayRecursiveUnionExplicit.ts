import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArrayRecursiveUnionExplicit = _test_is(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    TSON.createIs<ArrayRecursiveUnionExplicit>(),
    ArrayRecursiveUnionExplicit.SPOILERS,
);