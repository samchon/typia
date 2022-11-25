import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ArrayRecursiveUnionImplicit = _test_assert(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    TSON.createAssert<ArrayRecursiveUnionImplicit>(),
    ArrayRecursiveUnionImplicit.SPOILERS,
);