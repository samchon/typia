import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_array_recursive_union_implicit = _test_equals(
    "implicit recursive union array",
    ArrayRecursiveUnionImplicit.generate,
    (input) => TSON.equals(input),
);
