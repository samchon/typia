import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicNever } from "../../structures/DynamicNever";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_DynamicNever = (): void => _test_assertGuard(CustomGuardError)(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)((input) => typia.assertGuard<DynamicNever>(input, (p) => new CustomGuardError(p)));
