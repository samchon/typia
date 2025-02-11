import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_isReturnAsync_DynamicTag =
  _test_functional_isReturnAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.isReturn(p),
  );
