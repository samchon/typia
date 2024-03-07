import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectIntersection =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectIntersection",
  )(ObjectIntersection)(
    (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      typia.functional.assertEqualsReturn(p),
  );
