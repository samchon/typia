import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_isReturnAsync_DynamicJsonValue =
  _test_functional_isReturnAsync("DynamicJsonValue")(DynamicJsonValue)(
    (p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
      typia.functional.isReturn(p),
  );
