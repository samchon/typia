import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_array_recursive_union_explicit = _test_equals(
    "explicit recursive union array",
    ArrayRecursiveUnionExplicit.generate,
    TSON.createEquals<ArrayRecursiveUnionExplicit>(),
);
