import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_compare_equals_TypeTagInfinite = _test_compare_equals(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)((a, b) => typia.compare.equals<TypeTagInfinite>(a, b));
