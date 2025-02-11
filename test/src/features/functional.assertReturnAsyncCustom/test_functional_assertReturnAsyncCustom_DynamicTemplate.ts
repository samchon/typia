import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertReturnAsyncCustom_DynamicTemplate =
  _test_functional_assertReturnAsync(CustomGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
