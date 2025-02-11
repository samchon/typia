import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsReturnAsyncCustom_DynamicTemplate =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
