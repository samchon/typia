import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateEqualsFunctionAsync_TypeTagDefault = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.validateEqualsFunction(p),
)