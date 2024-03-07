import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateEqualsFunctionAsync_DynamicTag =
  _test_functional_validateEqualsFunctionAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.validateEqualsFunction(p),
  );
