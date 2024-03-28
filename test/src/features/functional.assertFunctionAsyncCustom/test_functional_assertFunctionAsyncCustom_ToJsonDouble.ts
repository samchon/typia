import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertFunctionAsyncCustom_ToJsonDouble =
  _test_functional_assertFunctionAsync(CustomGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
