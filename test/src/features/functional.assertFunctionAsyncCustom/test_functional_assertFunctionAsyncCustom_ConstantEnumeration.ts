import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertFunctionAsyncCustom_ConstantEnumeration =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ConstantEnumeration",
    )(ConstantEnumeration)(
      (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
