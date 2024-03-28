import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertGuardCustom_ToJsonUnion = _test_assertGuard(
  CustomGuardError,
)("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)(
  typia.createAssertGuard<ToJsonUnion>((p) => new CustomGuardError(p)),
);
