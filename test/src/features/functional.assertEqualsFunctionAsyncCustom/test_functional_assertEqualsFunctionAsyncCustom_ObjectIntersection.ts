import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectIntersection =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectIntersection",
  )(ObjectIntersection)(
    (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
