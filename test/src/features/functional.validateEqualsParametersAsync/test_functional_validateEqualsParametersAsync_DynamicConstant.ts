import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateEqualsParametersAsync_DynamicConstant =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.validateEqualsParameters(p),
    );
