import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsReturnCustom_DynamicTemplate =
  _test_functional_assertEqualsReturn(CustomGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
