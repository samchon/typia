import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertReturnCustom_ToJsonTuple =
  _test_functional_assertReturn(CustomGuardError)("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
