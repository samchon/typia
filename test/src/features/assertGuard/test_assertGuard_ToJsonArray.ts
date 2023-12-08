import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assertGuard_ToJsonArray = _test_assertGuard(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input) => typia.assertGuard<ToJsonArray>(input));
