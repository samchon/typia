import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertFunctionAsync_DynamicJsonValue =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("DynamicJsonValue")(
      DynamicJsonValue,
    )((p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
      typia.functional.assertFunction(p),
    );
