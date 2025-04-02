import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_compare_equals_ArrayAtomicSimple = _test_compare_equals(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)((a, b) => typia.compare.equals<ArrayAtomicSimple>(a, b));
