import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_isReturnAsync_DynamicUndefined =
  _test_functional_isReturnAsync("DynamicUndefined")(DynamicUndefined)(
    (p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
      typia.functional.isReturn(p),
  );
