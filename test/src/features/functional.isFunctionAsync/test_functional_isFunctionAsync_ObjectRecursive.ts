import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_isFunctionAsync_ObjectRecursive = _test_functional_isFunctionAsync(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.isFunction(p),
)