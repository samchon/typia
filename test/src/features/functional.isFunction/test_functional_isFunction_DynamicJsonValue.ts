import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_isFunction_DynamicJsonValue = (): void =>
  _test_functional_isFunction("DynamicJsonValue")(DynamicJsonValue)(
    (p: (input: DynamicJsonValue) => DynamicJsonValue) =>
      typia.functional.isFunction(p),
  );
