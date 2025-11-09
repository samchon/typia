import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_validateParametersAsync_ArrayAny = (): Promise<void> => _test_functional_validateParametersAsync(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => Promise<ArrayAny>) =>
    typia.functional.validateParameters(p),
)