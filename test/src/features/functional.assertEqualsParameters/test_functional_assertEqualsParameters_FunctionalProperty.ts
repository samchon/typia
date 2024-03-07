import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_FunctionalProperty =
  _test_functional_assertEqualsParameters(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertEqualsParameters(p),
  );
