import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateEqualsParametersAsync_ObjectRecursive = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.validateEqualsParameters(p),
)