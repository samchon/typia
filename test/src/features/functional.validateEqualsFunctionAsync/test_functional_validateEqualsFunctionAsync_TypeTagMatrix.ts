import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_validateEqualsFunctionAsync_TypeTagMatrix = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.validateEqualsFunction(p),
)