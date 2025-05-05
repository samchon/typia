import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_compare_equals_ConstantConstEnumeration = _test_compare_equals(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)((a, b) => typia.compare.equals<ConstantConstEnumeration>(a, b));
