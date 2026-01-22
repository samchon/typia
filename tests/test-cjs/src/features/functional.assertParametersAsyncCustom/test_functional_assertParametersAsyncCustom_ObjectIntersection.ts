import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertParametersAsyncCustom_ObjectIntersection =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ObjectIntersection",
    )(ObjectIntersection)(
      (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
