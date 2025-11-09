import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_equalsParametersAsync_ToJsonTuple =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ToJsonTuple")(ToJsonTuple)(
      (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
        typia.functional.equalsParameters(p),
    );
