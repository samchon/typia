import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_compare_equals_ArrayRecursiveUnionExplicit = _test_compare_equals(
    "ArrayRecursiveUnionExplicit",
)<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)((a, b) => typia.compare.equals<ArrayRecursiveUnionExplicit>(a, b));
