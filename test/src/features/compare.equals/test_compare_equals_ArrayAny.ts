import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_compare_equals_ArrayAny = _test_compare_equals(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)((a, b) => typia.compare.equals<ArrayAny>(a, b));
