import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertParametersAsync_ObjectIntersection =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.assertParameters(p),
  );
