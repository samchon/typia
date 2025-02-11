import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertGuardCustom_ArrayMatrix = _test_assertGuard(
  CustomGuardError,
)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
  typia.createAssertGuard<ArrayMatrix>((p) => new CustomGuardError(p)),
);
