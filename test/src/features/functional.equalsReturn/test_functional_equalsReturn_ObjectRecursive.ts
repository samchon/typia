import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_equalsReturn_ObjectRecursive = _test_functional_equalsReturn(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => ObjectRecursive) => typia.functional.equalsReturn(p),
)