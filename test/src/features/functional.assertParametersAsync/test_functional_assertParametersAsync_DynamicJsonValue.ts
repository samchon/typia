import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertParametersAsync_DynamicJsonValue =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("DynamicJsonValue")(
      DynamicJsonValue,
    )((p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
      typia.functional.assertParameters(p),
    );
