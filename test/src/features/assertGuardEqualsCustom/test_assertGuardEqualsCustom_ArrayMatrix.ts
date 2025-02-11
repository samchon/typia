import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertGuardEqualsCustom_ArrayMatrix = _test_assertGuardEquals(
  CustomGuardError,
)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)((input) =>
  typia.assertGuardEquals<ArrayMatrix>(input, (p) => new CustomGuardError(p)),
);
