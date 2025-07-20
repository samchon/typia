import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_equalsParametersAsync_DynamicConstant =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("DynamicConstant")(DynamicConstant)(
      (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
        typia.functional.equalsParameters(p),
    );
