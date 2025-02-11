import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetSimple } from "../../structures/SetSimple";

export const test_createAssert_SetSimple = _test_assert(TypeGuardError)(
  "SetSimple",
)<SetSimple>(SetSimple)(typia.createAssert<SetSimple>());
