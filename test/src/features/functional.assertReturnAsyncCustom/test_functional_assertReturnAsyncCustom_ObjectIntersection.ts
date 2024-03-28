import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertReturnAsyncCustom_ObjectIntersection =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
