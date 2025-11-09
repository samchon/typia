import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ArrayRepeatedUnionWithTuple = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ArrayRepeatedUnionWithTuple"
)(ArrayRepeatedUnionWithTuple)(
  (p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple) => typia.functional.assertParameters(p),
)