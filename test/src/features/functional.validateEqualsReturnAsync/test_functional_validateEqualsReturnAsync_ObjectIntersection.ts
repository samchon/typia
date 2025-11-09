import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateEqualsReturnAsync_ObjectIntersection = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.validateEqualsReturn(p),
)