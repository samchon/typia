import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createAssertGuard_ToJsonTuple = (): void =>
  _test_assertGuard(TypeGuardError)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)(
    typia.createAssertGuard<ToJsonTuple>(),
  );
