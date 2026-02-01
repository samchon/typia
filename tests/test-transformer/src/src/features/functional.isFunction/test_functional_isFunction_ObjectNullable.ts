import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_isFunction_ObjectNullable = (): void => _test_functional_isFunction(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => ObjectNullable) => typia.functional.isFunction(p),
)