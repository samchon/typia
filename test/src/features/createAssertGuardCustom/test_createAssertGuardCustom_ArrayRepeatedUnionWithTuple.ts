import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createAssertGuardCustom_ArrayRepeatedUnionWithTuple =
  _test_assertGuard(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
    typia.createAssertGuard<ArrayRepeatedUnionWithTuple>(
      (p) => new CustomGuardError(p),
    ),
  );
