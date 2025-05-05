import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_compare_equals_ArrayMatrix = _test_compare_equals(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)((a, b) => typia.compare.equals<ArrayMatrix>(a, b));
