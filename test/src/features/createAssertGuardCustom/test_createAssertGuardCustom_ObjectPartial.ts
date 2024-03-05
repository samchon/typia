import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createAssertGuardCustom_ObjectPartial = _test_assertGuard(
  CustomGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)(
  typia.createAssertGuard<ObjectPartial>((p) => new CustomGuardError(p)),
);
