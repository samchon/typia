import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateEqualsParametersAsync_ObjectGeneric = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.validateEqualsParameters(p),
)