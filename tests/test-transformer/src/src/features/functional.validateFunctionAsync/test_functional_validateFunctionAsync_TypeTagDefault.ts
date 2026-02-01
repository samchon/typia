import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateFunctionAsync_TypeTagDefault = (): Promise<void> => _test_functional_validateFunctionAsync(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.validateFunction(p),
)