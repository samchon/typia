import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_equalsParametersAsync_ToJsonDouble =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ToJsonDouble")(ToJsonDouble)(
      (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
        typia.functional.equalsParameters(p),
    );
