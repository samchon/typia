import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_compare_equals_ArrayAtomicAlias = _test_compare_equals(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)((a, b) => typia.compare.equals<ArrayAtomicAlias>(a, b));
