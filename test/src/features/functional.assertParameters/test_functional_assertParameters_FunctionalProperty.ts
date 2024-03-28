import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertParameters_FunctionalProperty =
  _test_functional_assertParameters(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertParameters(p),
  );
