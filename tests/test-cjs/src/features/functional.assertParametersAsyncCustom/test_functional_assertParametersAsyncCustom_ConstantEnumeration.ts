import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertParametersAsyncCustom_ConstantEnumeration =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ConstantEnumeration",
    )(ConstantEnumeration)(
      (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
