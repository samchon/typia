import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createAssertPruneCustom_ArrayMatrix = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )(typia.misc.createAssertPrune<ArrayMatrix>((p) => new CustomGuardError(p)));
