import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ConstantConstEnumeration = (): void => _test_assertGuard(TypeGuardError)(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)(typia.createAssertGuard<ConstantConstEnumeration>());
