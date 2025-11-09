import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertFunctionCustom_FunctionalTuple = (): void =>
  _test_functional_assertFunction(CustomGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
