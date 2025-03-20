import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_compare_equals_TypeTagTypeUnion = _test_compare_equals(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)((a, b) => typia.compare.equals<TypeTagTypeUnion>(a, b));
