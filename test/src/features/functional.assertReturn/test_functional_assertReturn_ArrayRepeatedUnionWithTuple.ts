import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ArrayRepeatedUnionWithTuple = (): void => _test_functional_assertReturn(TypeGuardError)(
  "ArrayRepeatedUnionWithTuple"
)(ArrayRepeatedUnionWithTuple)(
  (p: (input: ArrayRepeatedUnionWithTuple) => ArrayRepeatedUnionWithTuple) => typia.functional.assertReturn(p),
)