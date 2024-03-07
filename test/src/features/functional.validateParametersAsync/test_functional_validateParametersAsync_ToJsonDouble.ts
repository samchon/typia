import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateParametersAsync_ToJsonDouble =
  _test_functional_validateParametersAsync("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      typia.functional.validateParameters(p),
  );
