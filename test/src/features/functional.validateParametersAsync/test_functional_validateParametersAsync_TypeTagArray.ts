import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateParametersAsync_TypeTagArray = (): Promise<void> => _test_functional_validateParametersAsync(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.validateParameters(p),
)