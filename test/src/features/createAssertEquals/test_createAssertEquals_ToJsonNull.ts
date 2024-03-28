import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertEquals_ToJsonNull = _test_assertEquals(
  TypeGuardError,
)("ToJsonNull")<ToJsonNull>(ToJsonNull)(typia.createAssertEquals<ToJsonNull>());
