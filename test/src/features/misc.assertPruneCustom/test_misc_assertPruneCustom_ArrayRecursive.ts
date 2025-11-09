import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_assertPruneCustom_ArrayRecursive = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) =>
    typia.misc.assertPrune<ArrayRecursive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
