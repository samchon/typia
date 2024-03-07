import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_validateReturnAsync_DynamicUndefined =
  _test_functional_validateReturnAsync("DynamicUndefined")(DynamicUndefined)(
    (p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
      typia.functional.validateReturn(p),
  );
