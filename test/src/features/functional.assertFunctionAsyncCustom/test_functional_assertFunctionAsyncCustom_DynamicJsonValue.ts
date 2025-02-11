import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertFunctionAsyncCustom_DynamicJsonValue =
  _test_functional_assertFunctionAsync(CustomGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
