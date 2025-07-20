import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsParameters_DynamicTemplate =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)("DynamicTemplate")(
      DynamicTemplate,
    )((p: (input: DynamicTemplate) => DynamicTemplate) =>
      typia.functional.assertEqualsParameters(p),
    );
