import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_equalsFunction_ObjectHttpNullable = _test_functional_equalsFunction(
  "ObjectHttpNullable"
)(ObjectHttpNullable)(
  (p: (input: ObjectHttpNullable) => ObjectHttpNullable) => typia.functional.equalsFunction(p),
)