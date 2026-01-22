import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsReturn_DynamicTemplate = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertEqualsReturn(p),
  );
