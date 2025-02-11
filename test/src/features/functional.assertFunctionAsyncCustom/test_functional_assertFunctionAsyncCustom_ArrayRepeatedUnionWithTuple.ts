import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertFunctionAsyncCustom_ArrayRepeatedUnionWithTuple =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )(ArrayRepeatedUnionWithTuple)(
    (
      p: (
        input: ArrayRepeatedUnionWithTuple,
      ) => Promise<ArrayRepeatedUnionWithTuple>,
    ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
