import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ArrayRepeatedRequired = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ArrayRepeatedRequired"
)(ArrayRepeatedRequired)(
  (p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) => typia.functional.assertParameters(p),
)