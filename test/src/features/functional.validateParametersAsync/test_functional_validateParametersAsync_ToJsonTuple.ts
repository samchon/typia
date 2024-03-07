import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateParametersAsync_ToJsonTuple =
  _test_functional_validateParametersAsync("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.validateParameters(p),
  );
