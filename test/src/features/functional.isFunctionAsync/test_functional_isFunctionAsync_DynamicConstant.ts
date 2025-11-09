import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_isFunctionAsync_DynamicConstant =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("DynamicConstant")(DynamicConstant)(
      (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
        typia.functional.isFunction(p),
    );
