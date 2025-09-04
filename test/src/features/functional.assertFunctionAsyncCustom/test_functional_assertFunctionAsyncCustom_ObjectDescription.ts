import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertFunctionAsyncCustom_ObjectDescription =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ObjectDescription")(
      ObjectDescription,
    )((p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
