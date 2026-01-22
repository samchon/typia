import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_assertFunction_DynamicTemplate = (): void =>
  _test_functional_assertFunction(TypeGuardError)("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => DynamicTemplate) =>
    typia.functional.assertFunction(p),
  );
