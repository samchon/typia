import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateEqualsParametersAsync_ObjectIntersection = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.validateEqualsParameters(p),
)