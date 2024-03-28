import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertGuardCustom_ArrayMatrix = _test_assertGuard(
  CustomGuardError,
)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)((input) =>
  typia.assertGuard<ArrayMatrix>(input, (p) => new CustomGuardError(p)),
);
