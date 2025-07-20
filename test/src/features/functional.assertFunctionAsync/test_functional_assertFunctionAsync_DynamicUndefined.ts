import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertFunctionAsync_DynamicUndefined =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("DynamicUndefined")(
      DynamicUndefined,
    )((p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
      typia.functional.assertFunction(p),
    );
