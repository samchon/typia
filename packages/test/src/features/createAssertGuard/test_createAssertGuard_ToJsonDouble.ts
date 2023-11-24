import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createAssertGuard_ToJsonDouble = _test_assertGuard(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)(typia.createAssertGuard<ToJsonDouble>());
