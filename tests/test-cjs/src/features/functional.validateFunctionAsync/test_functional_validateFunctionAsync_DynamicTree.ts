import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_validateFunctionAsync_DynamicTree =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("DynamicTree")(DynamicTree)(
      (p: (input: DynamicTree) => Promise<DynamicTree>) =>
        typia.functional.validateFunction(p),
    );
