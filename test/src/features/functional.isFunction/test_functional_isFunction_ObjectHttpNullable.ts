import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_isFunction_ObjectHttpNullable = _test_functional_isFunction(
  "ObjectHttpNullable"
)(ObjectHttpNullable)(
  (p: (input: ObjectHttpNullable) => ObjectHttpNullable) => typia.functional.isFunction(p),
)