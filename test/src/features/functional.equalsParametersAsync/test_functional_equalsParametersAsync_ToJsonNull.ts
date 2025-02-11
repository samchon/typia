import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_equalsParametersAsync_ToJsonNull =
  _test_functional_equalsParametersAsync("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.equalsParameters(p),
  );
