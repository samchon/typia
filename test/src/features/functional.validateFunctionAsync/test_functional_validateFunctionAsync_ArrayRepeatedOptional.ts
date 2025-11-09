import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_validateFunctionAsync_ArrayRepeatedOptional = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ArrayRepeatedOptional"
)(ArrayRepeatedOptional)(
  (p: (input: ArrayRepeatedOptional) => Promise<ArrayRepeatedOptional>) =>
    typia.functional.validateFunction(p),
)