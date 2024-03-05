import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateReturn_DynamicConstant =
  _test_functional_validateReturn("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.validateReturn(p),
  );
