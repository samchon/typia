import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertEqualsFunctionCustom_FunctionalProperty =
  _test_functional_assertEqualsFunction(CustomGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
