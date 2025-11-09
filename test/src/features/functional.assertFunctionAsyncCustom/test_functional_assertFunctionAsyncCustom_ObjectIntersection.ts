import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectIntersection = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)