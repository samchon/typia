import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_assertCustom_ArrayRepeatedUnionWithTuple = (): void =>
  _test_assert(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
    typia.assert<ArrayRepeatedUnionWithTuple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
