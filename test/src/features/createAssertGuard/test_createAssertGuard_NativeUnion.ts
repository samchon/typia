import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeUnion } from "../../structures/NativeUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_NativeUnion = _test_assertGuard(
  TypeGuardError,
)("NativeUnion")<NativeUnion>(NativeUnion)(
  typia.createAssertGuard<NativeUnion>(),
);
