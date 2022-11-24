import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_is } from "../internal/_test_is";

export const test_create_is_array_recursive_union_implicit = _test_is(
    "implicit recursive union array",
    ArrayRecursiveUnionImplicit.generate,
    TSON.createIs<ArrayRecursiveUnionImplicit>(),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
