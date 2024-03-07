import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ToJsonDouble =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.assertEqualsReturn(p),
  );
