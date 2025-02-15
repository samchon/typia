import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_compare_equals_TypeTagObjectUnion = _test_compare_equals(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)((a, b) => typia.compare.equals<TypeTagObjectUnion>(a, b));
