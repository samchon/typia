import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertParametersAsyncCustom_DynamicConstant =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
