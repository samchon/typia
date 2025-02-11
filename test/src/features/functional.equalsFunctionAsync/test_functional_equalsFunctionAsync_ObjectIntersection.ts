import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_equalsFunctionAsync_ObjectIntersection = _test_functional_equalsFunctionAsync(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.equalsFunction(p),
)