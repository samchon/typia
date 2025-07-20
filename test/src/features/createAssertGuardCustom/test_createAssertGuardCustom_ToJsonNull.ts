import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertGuardCustom_ToJsonNull = (): void =>
  _test_assertGuard(CustomGuardError)("ToJsonNull")<ToJsonNull>(ToJsonNull)(
    typia.createAssertGuard<ToJsonNull>((p) => new CustomGuardError(p)),
  );
