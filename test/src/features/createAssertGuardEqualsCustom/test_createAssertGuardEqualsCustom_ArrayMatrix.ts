import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertGuardEqualsCustom_ArrayMatrix =
  _test_assertGuardEquals(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )(typia.createAssertGuardEquals<ArrayMatrix>((p) => new CustomGuardError(p)));
