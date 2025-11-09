import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_validateParameters_ArrayRepeatedNullable = (): void => _test_functional_validateParameters(
  "ArrayRepeatedNullable"
)(ArrayRepeatedNullable)(
  (p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) => typia.functional.validateParameters(p),
)