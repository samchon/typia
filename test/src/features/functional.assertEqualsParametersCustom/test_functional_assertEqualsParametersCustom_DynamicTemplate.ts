import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsParametersCustom_DynamicTemplate =
  _test_functional_assertEqualsParameters(CustomGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
