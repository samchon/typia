import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_assert_ToJsonNull = _test_assert(TypeGuardError)(
  "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) => typia.assert<ToJsonNull>(input));
