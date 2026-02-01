import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateParametersAsync_ObjectIntersection = (): Promise<void> => _test_functional_validateParametersAsync(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.validateParameters(p),
)