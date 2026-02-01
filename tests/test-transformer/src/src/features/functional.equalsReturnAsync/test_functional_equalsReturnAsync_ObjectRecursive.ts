import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_equalsReturnAsync_ObjectRecursive = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.equalsReturn(p),
)