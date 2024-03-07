import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_DynamicTemplate =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.assertEqualsFunction(p),
  );
