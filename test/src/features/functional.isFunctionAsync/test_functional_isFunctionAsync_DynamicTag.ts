import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_isFunctionAsync_DynamicTag = (): Promise<void> =>
  _test_functional_isFunctionAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.isFunction(p),
  );
