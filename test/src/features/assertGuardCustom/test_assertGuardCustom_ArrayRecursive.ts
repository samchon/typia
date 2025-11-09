import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertGuardCustom_ArrayRecursive = (): void =>
  _test_assertGuard(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) =>
    typia.assertGuard<ArrayRecursive>(input, (p) => new CustomGuardError(p)),
  );
