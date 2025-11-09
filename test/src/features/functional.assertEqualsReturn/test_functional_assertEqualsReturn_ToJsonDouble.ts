import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsReturn_ToJsonDouble = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => ToJsonDouble) =>
    typia.functional.assertEqualsReturn(p),
  );
