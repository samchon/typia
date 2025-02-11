import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_equalsReturn_ObjectNullable = _test_functional_equalsReturn(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => ObjectNullable) => typia.functional.equalsReturn(p),
)