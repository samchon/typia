import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertGuard_ToJsonDouble = _test_assertGuard(TypeGuardError)(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
  typia.assertGuard<ToJsonDouble>(input),
);
