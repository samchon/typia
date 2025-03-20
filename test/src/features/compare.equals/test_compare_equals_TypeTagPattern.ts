import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_compare_equals_TypeTagPattern = _test_compare_equals(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)((a, b) => typia.compare.equals<TypeTagPattern>(a, b));
