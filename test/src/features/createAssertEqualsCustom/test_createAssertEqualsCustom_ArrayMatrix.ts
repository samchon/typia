import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ArrayMatrix = _test_assertEquals(
  CustomGuardError,
)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
  typia.createAssertEquals<ArrayMatrix>((p) => new CustomGuardError(p)),
);
