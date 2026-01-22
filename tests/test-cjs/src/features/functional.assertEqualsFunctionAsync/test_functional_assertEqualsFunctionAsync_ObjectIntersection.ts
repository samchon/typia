import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsFunctionAsync_ObjectIntersection =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectIntersection",
    )(ObjectIntersection)(
      (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
        typia.functional.assertEqualsFunction(p),
    );
