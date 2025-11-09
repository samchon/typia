import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ArrayRepeatedUnion = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ArrayRepeatedUnion"
)(ArrayRepeatedUnion)(
  (p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) => typia.functional.assertParameters(p),
)