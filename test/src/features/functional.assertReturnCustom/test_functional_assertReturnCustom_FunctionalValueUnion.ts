import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertReturnCustom_FunctionalValueUnion =
  _test_functional_assertReturn(CustomGuardError)("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
