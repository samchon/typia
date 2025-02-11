import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeUnion } from "../../structures/NativeUnion";

import { TypeGuardError } from "typia";

export const test_assertGuard_NativeUnion = _test_assertGuard(TypeGuardError)(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)((input) => typia.assertGuard<NativeUnion>(input));
