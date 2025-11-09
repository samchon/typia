import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_equalsParametersAsync_ObjectIntersection = (): Promise<void> => _test_functional_equalsParametersAsync(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.equalsParameters(p),
)