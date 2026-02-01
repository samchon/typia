import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateParametersAsync_ObjectRecursive = (): Promise<void> => _test_functional_validateParametersAsync(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.validateParameters(p),
)