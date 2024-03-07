import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_equalsFunctionAsync_DynamicConstant =
  _test_functional_equalsFunctionAsync("DynamicConstant")(DynamicConstant)(
    (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.equalsFunction(p),
  );
