import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_assertCloneCustom_ArrayRecursive =
  _test_misc_assertClone(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) =>
    typia.misc.assertClone<ArrayRecursive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
