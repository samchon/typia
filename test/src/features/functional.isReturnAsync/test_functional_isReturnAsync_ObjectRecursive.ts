import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_isReturnAsync_ObjectRecursive = _test_functional_isReturnAsync(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.isReturn(p),
)