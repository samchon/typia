import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateEqualsParametersAsync_TypeTagDefault = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.validateEqualsParameters(p),
)