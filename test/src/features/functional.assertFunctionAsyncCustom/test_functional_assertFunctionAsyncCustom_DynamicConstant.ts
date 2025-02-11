import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertFunctionAsyncCustom_DynamicConstant =
  _test_functional_assertFunctionAsync(CustomGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
