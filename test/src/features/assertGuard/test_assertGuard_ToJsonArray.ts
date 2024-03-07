import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { TypeGuardError } from "typia";

export const test_assertGuard_ToJsonArray = _test_assertGuard(TypeGuardError)(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input) => typia.assertGuard<ToJsonArray>(input));
