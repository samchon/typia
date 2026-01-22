import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertCustom_ArrayRecursive = (): void =>
  _test_assert(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )((input) =>
    typia.assert<ArrayRecursive>(input, (p) => new CustomGuardError(p)),
  );
