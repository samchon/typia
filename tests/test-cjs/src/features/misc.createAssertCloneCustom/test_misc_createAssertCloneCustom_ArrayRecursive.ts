import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_createAssertCloneCustom_ArrayRecursive = (): void =>
  _test_misc_assertClone(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )(
    typia.misc.createAssertClone<ArrayRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
