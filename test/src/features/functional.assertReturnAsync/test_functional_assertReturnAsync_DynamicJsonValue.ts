import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_DynamicJsonValue = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
    typia.functional.assertReturn(p),
)