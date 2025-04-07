import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_compare_equals_ArrayRecursiveUnionExplicitPointer = _test_compare_equals(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)((a, b) => typia.compare.equals<ArrayRecursiveUnionExplicitPointer>(a, b));
