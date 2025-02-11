import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ConstantConstEnumeration = _test_assertGuardEquals(TypeGuardError)(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)((input) => typia.assertGuardEquals<ConstantConstEnumeration>(input));
