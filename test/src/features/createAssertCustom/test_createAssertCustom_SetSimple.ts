import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { SetSimple } from "../../structures/SetSimple";

export const test_createAssertCustom_SetSimple = _test_assert(CustomGuardError)(
  "SetSimple",
)<SetSimple>(SetSimple)(
  typia.createAssert<SetSimple>((p) => new CustomGuardError(p)),
);
