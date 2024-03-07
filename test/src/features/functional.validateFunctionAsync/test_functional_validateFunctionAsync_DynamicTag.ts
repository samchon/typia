import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateFunctionAsync_DynamicTag =
  _test_functional_validateFunctionAsync("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.validateFunction(p),
  );
