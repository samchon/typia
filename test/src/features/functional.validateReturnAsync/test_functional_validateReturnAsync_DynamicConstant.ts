import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateReturnAsync_DynamicConstant =
  _test_functional_validateReturnAsync("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.validateReturn(p),
  );
