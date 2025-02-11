import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_isFunction_ObjectPrimitive = _test_functional_isFunction(
  "ObjectPrimitive"
)(ObjectPrimitive)(
  (p: (input: ObjectPrimitive) => ObjectPrimitive) => typia.functional.isFunction(p),
)