import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_compare_equals_ConstantEnumeration = _test_compare_equals(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((a, b) => typia.compare.equals<ConstantEnumeration>(a, b));
