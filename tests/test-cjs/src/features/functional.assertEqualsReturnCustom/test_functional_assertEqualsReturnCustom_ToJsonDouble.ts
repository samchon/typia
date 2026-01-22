import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsReturnCustom_ToJsonDouble = (): void =>
  _test_functional_assertEqualsReturn(CustomGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => ToJsonDouble) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
