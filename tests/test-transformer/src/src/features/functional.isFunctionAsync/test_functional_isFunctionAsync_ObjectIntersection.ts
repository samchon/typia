import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_isFunctionAsync_ObjectIntersection = (): Promise<void> => _test_functional_isFunctionAsync(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.isFunction(p),
)