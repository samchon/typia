import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_assertParameters_ArrayRepeatedUnionWithTuple =
  _test_functional_assertParameters(TypeGuardError)(
    "ArrayRepeatedUnionWithTuple",
  )(ArrayRepeatedUnionWithTuple)(
    (p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple) =>
      typia.functional.assertParameters(p),
  );
