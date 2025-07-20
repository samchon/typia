import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertFunctionCustom_DynamicTemplate = (): void =>
  _test_functional_assertFunction(CustomGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
