import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ArrayRepeatedOptional = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ArrayRepeatedOptional"
)(ArrayRepeatedOptional)(
  (p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) => typia.functional.assertParameters(p),
)