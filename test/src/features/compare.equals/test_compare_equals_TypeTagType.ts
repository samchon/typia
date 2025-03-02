import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_compare_equals_TypeTagType = _test_compare_equals(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)((a, b) => typia.compare.equals<TypeTagType>(a, b));
