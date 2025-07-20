import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertFunctionAsyncCustom_ObjectPartial =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ObjectPartial")(
      ObjectPartial,
    )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
