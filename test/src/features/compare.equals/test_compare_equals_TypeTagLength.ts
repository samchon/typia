import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_compare_equals_TypeTagLength = _test_compare_equals(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((a, b) => typia.compare.equals<TypeTagLength>(a, b));
