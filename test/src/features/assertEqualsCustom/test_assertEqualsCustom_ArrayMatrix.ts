import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertEqualsCustom_ArrayMatrix = _test_assertEquals(
  CustomGuardError,
)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)((input) =>
  typia.assertEquals<ArrayMatrix>(input, (p) => new CustomGuardError(p)),
);
