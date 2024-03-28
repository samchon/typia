import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsFunctionCustom_DynamicTemplate =
  _test_functional_assertEqualsFunction(CustomGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
