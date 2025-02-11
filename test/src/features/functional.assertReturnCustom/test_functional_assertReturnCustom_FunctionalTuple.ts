import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertReturnCustom_FunctionalTuple =
  _test_functional_assertReturn(CustomGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
