import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertGuardCustom_ArrayUnion = _test_assertGuard(
  CustomGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
  typia.createAssertGuard<ArrayUnion>((p) => new CustomGuardError(p)),
);
