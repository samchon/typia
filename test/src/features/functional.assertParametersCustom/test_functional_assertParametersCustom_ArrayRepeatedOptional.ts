import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArrayRepeatedOptional = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ArrayRepeatedOptional"
)(ArrayRepeatedOptional)(
  (p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)