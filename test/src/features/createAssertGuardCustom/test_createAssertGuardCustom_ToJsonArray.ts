import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssertGuardCustom_ToJsonArray = (): void =>
  _test_assertGuard(CustomGuardError)("ToJsonArray")<ToJsonArray>(ToJsonArray)(
    typia.createAssertGuard<ToJsonArray>((p) => new CustomGuardError(p)),
  );
