import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateEqualsParametersAsync_TypeTagLength = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.validateEqualsParameters(p),
)