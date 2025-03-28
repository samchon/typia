import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_compare_equals_ArrayRepeatedOptional = _test_compare_equals(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)((a, b) => typia.compare.equals<ArrayRepeatedOptional>(a, b));
