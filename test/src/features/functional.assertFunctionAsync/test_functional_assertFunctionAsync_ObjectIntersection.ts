import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectIntersection =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.assertFunction(p),
  );
