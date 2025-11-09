import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateFunctionAsync_TypeTagNaN = (): Promise<void> => _test_functional_validateFunctionAsync(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.validateFunction(p),
)