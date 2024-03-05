import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertParametersCustom_FunctionalTuple =
  _test_functional_assertParameters(CustomGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
