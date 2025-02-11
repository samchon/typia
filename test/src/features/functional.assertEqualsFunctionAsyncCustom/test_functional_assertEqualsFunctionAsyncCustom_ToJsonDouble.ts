import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsFunctionAsyncCustom_ToJsonDouble =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
