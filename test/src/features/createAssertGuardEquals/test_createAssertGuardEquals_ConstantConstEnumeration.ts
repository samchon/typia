import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ConstantConstEnumeration = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)(typia.createAssertGuardEquals<ConstantConstEnumeration>());
