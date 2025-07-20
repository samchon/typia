import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertReturnCustom_DynamicTemplate = (): void =>
  _test_functional_assertReturn(CustomGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
