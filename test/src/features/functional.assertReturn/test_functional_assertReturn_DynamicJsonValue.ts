import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_DynamicJsonValue = (): void => _test_functional_assertReturn(TypeGuardError)(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => DynamicJsonValue) => typia.functional.assertReturn(p),
)