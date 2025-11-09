import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_equalsFunction_ObjectIntersection = (): void => _test_functional_equalsFunction(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => ObjectIntersection) => typia.functional.equalsFunction(p),
)