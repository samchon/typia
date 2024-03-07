import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_DynamicTemplate =
  _test_functional_assertEqualsFunction(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertEqualsFunction(p),
  );
