import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_isReturnAsync_ObjectIntersection = (): Promise<void> => _test_functional_isReturnAsync(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.isReturn(p),
)