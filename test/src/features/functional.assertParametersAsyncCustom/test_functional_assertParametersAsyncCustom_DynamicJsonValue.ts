import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertParametersAsyncCustom_DynamicJsonValue =
  _test_functional_assertParametersAsync(CustomGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
