import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateEqualsParametersAsync_ToJsonDouble =
  _test_functional_validateEqualsParametersAsync("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      typia.functional.validateEqualsParameters(p),
  );
