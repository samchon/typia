import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createAssertGuardEqualsCustom_ArrayRecursive = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )(
    typia.createAssertGuardEquals<ArrayRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
