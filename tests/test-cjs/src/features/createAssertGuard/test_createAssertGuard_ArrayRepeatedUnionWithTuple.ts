import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createAssertGuard_ArrayRepeatedUnionWithTuple = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
    typia.createAssertGuard<ArrayRepeatedUnionWithTuple>(),
  );
