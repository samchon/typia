import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateEqualsParametersAsync_ObjectNullable = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.validateEqualsParameters(p),
)