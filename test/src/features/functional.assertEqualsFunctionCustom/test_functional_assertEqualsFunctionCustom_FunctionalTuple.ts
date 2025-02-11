import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsFunctionCustom_FunctionalTuple =
  _test_functional_assertEqualsFunction(CustomGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
