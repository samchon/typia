import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_is } from "../internal/_test_is";

export const test_is_array_recursive_union_explicit = _test_is(
    "explicit recursive union array",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.is(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
