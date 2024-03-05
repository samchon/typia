import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_validateReturn_DynamicJsonValue =
  _test_functional_validateReturn("DynamicJsonValue")(DynamicJsonValue)(
    (p: (input: DynamicJsonValue) => DynamicJsonValue) =>
      typia.functional.validateReturn(p),
  );
