import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectIntersection =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "ObjectIntersection",
    )(ObjectIntersection)(
      (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
