import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertReturnCustom_FunctionalProperty =
  _test_functional_assertReturn(CustomGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
