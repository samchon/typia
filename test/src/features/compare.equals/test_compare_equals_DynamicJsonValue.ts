import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_compare_equals_DynamicJsonValue = _test_compare_equals(
    "DynamicJsonValue",
)<DynamicJsonValue>(
    DynamicJsonValue
)((a, b) => typia.compare.equals<DynamicJsonValue>(a, b));
