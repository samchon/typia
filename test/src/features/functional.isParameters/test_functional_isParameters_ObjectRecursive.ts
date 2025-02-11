import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_isParameters_ObjectRecursive = _test_functional_isParameters(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => ObjectRecursive) => typia.functional.isParameters(p),
)