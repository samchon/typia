import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ArrayUnion = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => ArrayUnion) => typia.functional.assertEqualsParameters(p),
)