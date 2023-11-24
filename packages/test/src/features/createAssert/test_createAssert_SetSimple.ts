import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetSimple } from "../../structures/SetSimple";

export const test_createAssert_SetSimple = _test_assert("SetSimple")<SetSimple>(
  SetSimple,
)(typia.createAssert<SetSimple>());
