import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsParametersAsync_ToJsonDouble =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ToJsonDouble",
    )(ToJsonDouble)((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      typia.functional.assertEqualsParameters(p),
    );
