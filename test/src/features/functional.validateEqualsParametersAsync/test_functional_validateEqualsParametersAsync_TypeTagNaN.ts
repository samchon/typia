import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateEqualsParametersAsync_TypeTagNaN = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.validateEqualsParameters(p),
)