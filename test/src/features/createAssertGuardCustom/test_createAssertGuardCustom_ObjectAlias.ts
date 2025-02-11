import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertGuardCustom_ObjectAlias = _test_assertGuard(
  CustomGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
  typia.createAssertGuard<ObjectAlias>((p) => new CustomGuardError(p)),
);
