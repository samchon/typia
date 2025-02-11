import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsReturnAsyncCustom_ToJsonDouble =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
