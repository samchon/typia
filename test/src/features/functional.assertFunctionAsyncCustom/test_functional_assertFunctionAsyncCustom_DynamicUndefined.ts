import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertFunctionAsyncCustom_DynamicUndefined =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("DynamicUndefined")(
      DynamicUndefined,
    )((p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
