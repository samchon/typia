import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_assertGuardCustom_ArrayRepeatedUnionWithTuple = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
    typia.assertGuard<ArrayRepeatedUnionWithTuple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
