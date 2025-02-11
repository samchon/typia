import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertParametersAsync_DynamicTemplate =
  _test_functional_assertParametersAsync(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.assertParameters(p),
  );
