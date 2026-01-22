import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertGuard_ToJsonNull = (): void =>
  _test_assertGuard(TypeGuardError)("ToJsonNull")<ToJsonNull>(ToJsonNull)(
    typia.createAssertGuard<ToJsonNull>(),
  );
