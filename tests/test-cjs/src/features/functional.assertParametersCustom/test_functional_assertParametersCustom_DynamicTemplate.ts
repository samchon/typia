import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertParametersCustom_DynamicTemplate =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("DynamicTemplate")(
      DynamicTemplate,
    )((p: (input: DynamicTemplate) => DynamicTemplate) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
