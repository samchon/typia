import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateFunction_ObjectRecursive = (): void => _test_functional_validateFunction(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => ObjectRecursive) => typia.functional.validateFunction(p),
)