import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_equalsFunctionAsync_ObjectRecursive = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.equalsFunction(p),
)