import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectIntersection =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectIntersection",
    )(ObjectIntersection)(
      (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
