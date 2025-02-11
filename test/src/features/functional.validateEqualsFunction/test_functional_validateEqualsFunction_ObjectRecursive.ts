import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateEqualsFunction_ObjectRecursive = _test_functional_validateEqualsFunction(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => ObjectRecursive) => typia.functional.validateEqualsFunction(p),
)