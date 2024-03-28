import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsReturnAsync_DynamicTemplate =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.assertEqualsReturn(p),
  );
