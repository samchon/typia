import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateEqualsFunctionAsync_TypeTagRange = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.validateEqualsFunction(p),
)