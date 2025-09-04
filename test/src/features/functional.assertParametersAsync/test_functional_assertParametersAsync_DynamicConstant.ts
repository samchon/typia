import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertParametersAsync_DynamicConstant =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.assertParameters(p),
    );
