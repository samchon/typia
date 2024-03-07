import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_equalsReturnAsync_DynamicTag =
  _test_functional_equalsReturnAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.equalsReturn(p),
  );
