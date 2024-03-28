import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsFunctionCustom_ToJsonDouble =
  _test_functional_assertEqualsFunction(CustomGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => ToJsonDouble) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
