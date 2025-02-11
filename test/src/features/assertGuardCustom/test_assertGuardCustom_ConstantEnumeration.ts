import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ConstantEnumeration = _test_assertGuard(CustomGuardError)(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.assertGuard<ConstantEnumeration>(input, (p) => new CustomGuardError(p)));
