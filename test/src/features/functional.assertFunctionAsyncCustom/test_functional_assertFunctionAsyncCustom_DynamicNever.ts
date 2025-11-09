import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_assertFunctionAsyncCustom_DynamicNever =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("DynamicNever")(
      DynamicNever,
    )((p: (input: DynamicNever) => Promise<DynamicNever>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
