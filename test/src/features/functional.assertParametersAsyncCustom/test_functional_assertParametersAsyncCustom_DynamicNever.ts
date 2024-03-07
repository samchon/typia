import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicNever } from "../../structures/DynamicNever";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_DynamicNever =
  _test_functional_assertParametersAsync(CustomGuardError)("DynamicNever")(
    DynamicNever,
  )((p: (input: DynamicNever) => Promise<DynamicNever>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
