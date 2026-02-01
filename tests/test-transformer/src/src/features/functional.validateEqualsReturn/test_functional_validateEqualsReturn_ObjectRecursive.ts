import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateEqualsReturn_ObjectRecursive = (): void => _test_functional_validateEqualsReturn(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => ObjectRecursive) => typia.functional.validateEqualsReturn(p),
)