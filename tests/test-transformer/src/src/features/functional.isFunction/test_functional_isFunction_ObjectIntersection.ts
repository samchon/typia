import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_isFunction_ObjectIntersection = (): void => _test_functional_isFunction(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => ObjectIntersection) => typia.functional.isFunction(p),
)