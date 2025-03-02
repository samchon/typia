import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_compare_equals_ArrayUnion = _test_compare_equals(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)((a, b) => typia.compare.equals<ArrayUnion>(a, b));
