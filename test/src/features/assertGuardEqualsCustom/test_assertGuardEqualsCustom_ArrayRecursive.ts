import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertGuardEqualsCustom_ArrayRecursive = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) =>
    typia.assertGuardEquals<ArrayRecursive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
