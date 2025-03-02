import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_compare_equals_DynamicTemplate = _test_compare_equals(
    "DynamicTemplate",
)<DynamicTemplate>(
    DynamicTemplate
)((a, b) => typia.compare.equals<DynamicTemplate>(a, b));
