import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_DynamicTemplate =
  _test_functional_assertEqualsReturn(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertEqualsReturn(p),
  );
