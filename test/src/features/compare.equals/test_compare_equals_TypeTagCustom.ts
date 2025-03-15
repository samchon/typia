import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_compare_equals_TypeTagCustom = _test_compare_equals(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)((a, b) => typia.compare.equals<TypeTagCustom>(a, b));
