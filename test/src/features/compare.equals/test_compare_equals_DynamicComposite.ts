import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_compare_equals_DynamicComposite = _test_compare_equals(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)((a, b) => typia.compare.equals<DynamicComposite>(a, b));
