import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateEqualsParametersAsync_ToJsonNull =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ToJsonNull")(ToJsonNull)(
      (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
        typia.functional.validateEqualsParameters(p),
    );
