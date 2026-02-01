import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_validateFunctionAsync_TypeTagMatrix = (): Promise<void> => _test_functional_validateFunctionAsync(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.validateFunction(p),
)