import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertFunctionAsync_DynamicTemplate =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.assertFunction(p),
  );
