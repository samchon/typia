import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateParametersAsync_DynamicConstant =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.validateParameters(p),
    );
