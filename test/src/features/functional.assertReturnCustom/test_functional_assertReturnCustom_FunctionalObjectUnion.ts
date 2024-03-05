import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertReturnCustom_FunctionalObjectUnion =
  _test_functional_assertReturn(CustomGuardError)("FunctionalObjectUnion")(
    FunctionalObjectUnion,
  )((p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
