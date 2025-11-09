import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_DynamicTemplate = (): void => _test_functional_assertReturn(TypeGuardError)(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => DynamicTemplate) => typia.functional.assertReturn(p),
)