import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ArrayRepeatedUnion = _test_functional_assertReturn(TypeGuardError)(
  "ArrayRepeatedUnion"
)(ArrayRepeatedUnion)(
  (p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) => typia.functional.assertReturn(p),
)