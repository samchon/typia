import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createAssertCloneCustom_ArrayMatrix = (): void =>
  _test_misc_assertClone(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )(typia.misc.createAssertClone<ArrayMatrix>((p) => new CustomGuardError(p)));
