import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_assertCloneCustom_ArrayMatrix = (): void =>
  _test_misc_assertClone(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )((input) =>
    typia.misc.assertClone<ArrayMatrix>(input, (p) => new CustomGuardError(p)),
  );
