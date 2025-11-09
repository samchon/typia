import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ConstantEnumeration = (): void => _test_assertGuard(CustomGuardError)(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.createAssertGuard<ConstantEnumeration>((p) => new CustomGuardError(p)));
