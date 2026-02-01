import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateFunctionAsync_ObjectIntersection = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.validateFunction(p),
)