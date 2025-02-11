import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertReturnAsync_DynamicTemplate =
  _test_functional_assertReturnAsync(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.assertReturn(p),
  );
