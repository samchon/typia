import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_compare_equals_TypeTagDefault = _test_compare_equals(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)((a, b) => typia.compare.equals<TypeTagDefault>(a, b));
