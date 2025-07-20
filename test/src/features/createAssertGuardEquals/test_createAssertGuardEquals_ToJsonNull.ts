import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertGuardEquals_ToJsonNull = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ToJsonNull")<ToJsonNull>(ToJsonNull)(
    typia.createAssertGuardEquals<ToJsonNull>(),
  );
