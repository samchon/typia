import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertReturnAsync_ObjectIntersection =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.assertReturn(p),
  );
