import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_DynamicTemplate =
  _test_functional_assertParameters(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertParameters(p),
  );
