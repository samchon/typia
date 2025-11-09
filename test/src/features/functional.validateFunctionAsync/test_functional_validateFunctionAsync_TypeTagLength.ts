import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateFunctionAsync_TypeTagLength = (): Promise<void> => _test_functional_validateFunctionAsync(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.validateFunction(p),
)