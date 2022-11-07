import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_array_recursive_union_implicit = _test_assert(
    "implicit recursive union array",
    ArrayRecursiveUnionImplicit.generate,
    TSON.createAssert<ArrayRecursiveUnionImplicit>(),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
