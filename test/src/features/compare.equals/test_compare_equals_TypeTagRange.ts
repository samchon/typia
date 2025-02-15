import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_compare_equals_TypeTagRange = _test_compare_equals(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((a, b) => typia.compare.equals<TypeTagRange>(a, b));
