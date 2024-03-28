import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertParametersAsync_ToJsonDouble =
  _test_functional_assertParametersAsync(TypeGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.assertParameters(p),
  );
