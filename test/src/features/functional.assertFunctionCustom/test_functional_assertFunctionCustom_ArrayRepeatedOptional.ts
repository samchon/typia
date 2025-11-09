import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArrayRepeatedOptional = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ArrayRepeatedOptional"
)(ArrayRepeatedOptional)(
  (p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)