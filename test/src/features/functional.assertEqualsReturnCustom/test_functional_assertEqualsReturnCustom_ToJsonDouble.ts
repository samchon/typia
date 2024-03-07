import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ToJsonDouble =
  _test_functional_assertEqualsReturn(CustomGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => ToJsonDouble) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
