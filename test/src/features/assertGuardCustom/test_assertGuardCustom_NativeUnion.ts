import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeUnion } from "../../structures/NativeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_NativeUnion = (): void => _test_assertGuard(CustomGuardError)(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)((input) => typia.assertGuard<NativeUnion>(input, (p) => new CustomGuardError(p)));
