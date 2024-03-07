import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_DynamicUndefined =
  _test_functional_assertParametersAsync(CustomGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
