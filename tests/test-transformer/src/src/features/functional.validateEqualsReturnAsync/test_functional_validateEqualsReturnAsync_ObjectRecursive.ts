import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateEqualsReturnAsync_ObjectRecursive = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.validateEqualsReturn(p),
)