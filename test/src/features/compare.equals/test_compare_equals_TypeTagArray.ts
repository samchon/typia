import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_compare_equals_TypeTagArray = _test_compare_equals(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((a, b) => typia.compare.equals<TypeTagArray>(a, b));
