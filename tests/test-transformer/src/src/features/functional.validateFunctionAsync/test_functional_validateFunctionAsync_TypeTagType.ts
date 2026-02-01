import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateFunctionAsync_TypeTagType = (): Promise<void> => _test_functional_validateFunctionAsync(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.validateFunction(p),
)