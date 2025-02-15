import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_compare_equals_ArraySimple = _test_compare_equals(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)((a, b) => typia.compare.equals<ArraySimple>(a, b));
