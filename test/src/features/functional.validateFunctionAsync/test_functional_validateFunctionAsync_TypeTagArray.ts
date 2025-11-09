import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateFunctionAsync_TypeTagArray = (): Promise<void> => _test_functional_validateFunctionAsync(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.validateFunction(p),
)