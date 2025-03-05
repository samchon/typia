import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_compare_equals_ArrayRecursiveUnionImplicit = _test_compare_equals(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit
)((a, b) => typia.compare.equals<ArrayRecursiveUnionImplicit>(a, b));
