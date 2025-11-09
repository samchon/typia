import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_validateFunctionAsync_ArrayRepeatedRequired = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ArrayRepeatedRequired"
)(ArrayRepeatedRequired)(
  (p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
    typia.functional.validateFunction(p),
)