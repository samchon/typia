import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_validateFunctionAsync_DynamicJsonValue =
  _test_functional_validateFunctionAsync("DynamicJsonValue")(DynamicJsonValue)(
    (p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
      typia.functional.validateFunction(p),
  );
