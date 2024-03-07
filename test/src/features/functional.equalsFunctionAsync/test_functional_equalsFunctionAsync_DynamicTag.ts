import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_equalsFunctionAsync_DynamicTag =
  _test_functional_equalsFunctionAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.equalsFunction(p),
  );
