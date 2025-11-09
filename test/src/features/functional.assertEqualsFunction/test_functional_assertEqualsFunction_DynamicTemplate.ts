import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertEqualsFunction_DynamicTemplate = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertEqualsFunction(p),
  );
