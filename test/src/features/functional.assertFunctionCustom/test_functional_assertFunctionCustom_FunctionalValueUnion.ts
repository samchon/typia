import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertFunctionCustom_FunctionalValueUnion =
  _test_functional_assertFunction(CustomGuardError)("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
