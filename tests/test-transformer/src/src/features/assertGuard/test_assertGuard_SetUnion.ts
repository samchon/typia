import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetUnion } from "../../structures/SetUnion";

import { TypeGuardError } from "typia";

export const test_assertGuard_SetUnion = (): void => _test_assertGuard(TypeGuardError)(
    "SetUnion",
)<SetUnion>(
    SetUnion
)((input) => typia.assertGuard<SetUnion>(input));
