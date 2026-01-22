import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertParametersAsync_DynamicUndefined =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("DynamicUndefined")(
      DynamicUndefined,
    )((p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
      typia.functional.assertParameters(p),
    );
