import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsReturnAsync_ObjectIntersection =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectIntersection",
  )(ObjectIntersection)(
    (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      typia.functional.assertEqualsReturn(p),
  );
