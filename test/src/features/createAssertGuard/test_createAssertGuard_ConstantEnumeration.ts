import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ConstantEnumeration = _test_assertGuard(TypeGuardError)(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.createAssertGuard<ConstantEnumeration>());
