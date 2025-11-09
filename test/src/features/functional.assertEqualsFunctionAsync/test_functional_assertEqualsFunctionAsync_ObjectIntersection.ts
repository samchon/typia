import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ObjectIntersection = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.assertEqualsFunction(p),
)