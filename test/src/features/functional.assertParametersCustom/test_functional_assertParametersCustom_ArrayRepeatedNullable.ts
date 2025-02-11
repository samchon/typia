import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArrayRepeatedNullable = _test_functional_assertParameters(CustomGuardError)(
  "ArrayRepeatedNullable"
)(ArrayRepeatedNullable)(
  (p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)