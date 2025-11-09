import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ArrayRepeatedOptional = (): void => _test_functional_assertReturn(TypeGuardError)(
  "ArrayRepeatedOptional"
)(ArrayRepeatedOptional)(
  (p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) => typia.functional.assertReturn(p),
)