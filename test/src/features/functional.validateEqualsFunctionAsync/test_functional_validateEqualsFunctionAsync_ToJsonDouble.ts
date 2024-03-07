import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateEqualsFunctionAsync_ToJsonDouble =
  _test_functional_validateEqualsFunctionAsync("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      typia.functional.validateEqualsFunction(p),
  );
