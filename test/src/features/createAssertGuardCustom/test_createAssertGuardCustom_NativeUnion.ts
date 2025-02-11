import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeUnion } from "../../structures/NativeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_NativeUnion = _test_assertGuard(CustomGuardError)(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)(typia.createAssertGuard<NativeUnion>((p) => new CustomGuardError(p)));
