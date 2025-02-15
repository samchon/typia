import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_compare_equals_TypeTagNaN = _test_compare_equals(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)((a, b) => typia.compare.equals<TypeTagNaN>(a, b));
