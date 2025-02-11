import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertGuardCustom_ObjectUndefined = _test_assertGuard(
  CustomGuardError,
)("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
  typia.createAssertGuard<ObjectUndefined>((p) => new CustomGuardError(p)),
);
