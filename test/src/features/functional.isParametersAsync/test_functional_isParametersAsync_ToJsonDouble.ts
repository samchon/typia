import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_isParametersAsync_ToJsonDouble =
  _test_functional_isParametersAsync("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      typia.functional.isParameters(p),
  );
