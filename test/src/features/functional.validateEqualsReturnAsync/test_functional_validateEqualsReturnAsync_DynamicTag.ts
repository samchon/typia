import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateEqualsReturnAsync_DynamicTag =
  _test_functional_validateEqualsReturnAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.validateEqualsReturn(p),
  );
