import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createAssertGuard_ToJsonDouble = _test_assertGuard(
  TypeGuardError,
)("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)(
  typia.createAssertGuard<ToJsonDouble>(),
);
