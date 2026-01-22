import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_createAssertGuard_NativeUnion = (): void =>
  _test_assertGuard(TypeGuardError)("NativeUnion")<NativeUnion>(NativeUnion)(
    typia.createAssertGuard<NativeUnion>(),
  );
