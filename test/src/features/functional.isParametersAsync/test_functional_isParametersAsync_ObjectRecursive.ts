import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_isParametersAsync_ObjectRecursive = (): Promise<void> => _test_functional_isParametersAsync(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.isParameters(p),
)