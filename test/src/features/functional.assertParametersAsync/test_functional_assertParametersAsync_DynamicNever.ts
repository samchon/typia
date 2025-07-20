import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_assertParametersAsync_DynamicNever =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("DynamicNever")(
      DynamicNever,
    )((p: (input: DynamicNever) => Promise<DynamicNever>) =>
      typia.functional.assertParameters(p),
    );
