import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_validateReturnAsync_DynamicJsonValue =
  _test_functional_validateReturnAsync("DynamicJsonValue")(DynamicJsonValue)(
    (p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
      typia.functional.validateReturn(p),
  );
