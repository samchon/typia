import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { TypeGuardError } from "typia";

export const test_assertGuard_ToJsonNull = _test_assertGuard(TypeGuardError)(
  "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) => typia.assertGuard<ToJsonNull>(input));
