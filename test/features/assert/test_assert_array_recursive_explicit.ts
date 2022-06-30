import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assert } from "./_test_assert";

export const test_assert_array_recursive_union_explicit = _test_assert(
    "explicit recursive union array",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.assertType(input),
);
