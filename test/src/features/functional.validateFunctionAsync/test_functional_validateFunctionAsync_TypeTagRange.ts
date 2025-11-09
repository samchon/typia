import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateFunctionAsync_TypeTagRange = (): Promise<void> => _test_functional_validateFunctionAsync(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.validateFunction(p),
)