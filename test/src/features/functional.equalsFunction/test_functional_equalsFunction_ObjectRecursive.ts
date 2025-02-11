import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_equalsFunction_ObjectRecursive = _test_functional_equalsFunction(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => ObjectRecursive) => typia.functional.equalsFunction(p),
)