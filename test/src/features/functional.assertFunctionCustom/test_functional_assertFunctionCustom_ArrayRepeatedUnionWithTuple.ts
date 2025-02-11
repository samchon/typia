import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertFunctionCustom_ArrayRepeatedUnionWithTuple =
  _test_functional_assertFunction(CustomGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )(ArrayRepeatedUnionWithTuple)(
    (p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
