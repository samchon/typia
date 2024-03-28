import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertParametersAsyncCustom_DynamicTemplate =
  _test_functional_assertParametersAsync(CustomGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
