import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_isParametersAsync_DynamicJsonValue =
  _test_functional_isParametersAsync("DynamicJsonValue")(DynamicJsonValue)(
    (p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
      typia.functional.isParameters(p),
  );
