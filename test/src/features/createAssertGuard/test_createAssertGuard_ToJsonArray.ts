import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssertGuard_ToJsonArray = (): void =>
  _test_assertGuard(TypeGuardError)("ToJsonArray")<ToJsonArray>(ToJsonArray)(
    typia.createAssertGuard<ToJsonArray>(),
  );
