import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateFunctionAsync_TypeTagFormat = (): Promise<void> => _test_functional_validateFunctionAsync(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.validateFunction(p),
)