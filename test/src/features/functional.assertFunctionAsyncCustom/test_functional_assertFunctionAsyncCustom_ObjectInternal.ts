import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertFunctionAsyncCustom_ObjectInternal =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ObjectInternal")(
      ObjectInternal,
    )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
