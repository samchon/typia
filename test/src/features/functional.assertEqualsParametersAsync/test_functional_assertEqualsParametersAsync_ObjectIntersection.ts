import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsParametersAsync_ObjectIntersection =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectIntersection",
  )(ObjectIntersection)(
    (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      typia.functional.assertEqualsParameters(p),
  );
