import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertFunctionAsync_ArrayRepeatedUnionWithTuple =
  _test_functional_assertFunctionAsync(TypeGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )(ArrayRepeatedUnionWithTuple)(
    (
      p: (
        input: ArrayRepeatedUnionWithTuple,
      ) => Promise<ArrayRepeatedUnionWithTuple>,
    ) => typia.functional.assertFunction(p),
  );
