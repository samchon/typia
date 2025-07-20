import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createAssertCustom_ArrayRepeatedUnionWithTuple = (): void =>
  _test_assert(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
    typia.createAssert<ArrayRepeatedUnionWithTuple>(
      (p) => new CustomGuardError(p),
    ),
  );
