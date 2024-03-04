import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertEqualsReturnCustom_ToJsonTuple =
  _test_functional_assertEqualsReturn(CustomGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => ToJsonTuple) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
