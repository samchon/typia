import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createAssertGuardCustom_ToJsonTuple = (): void =>
  _test_assertGuard(CustomGuardError)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)(
    typia.createAssertGuard<ToJsonTuple>((p) => new CustomGuardError(p)),
  );
