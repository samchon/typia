import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_FunctionalTuple =
  _test_functional_assertEqualsParameters(CustomGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
