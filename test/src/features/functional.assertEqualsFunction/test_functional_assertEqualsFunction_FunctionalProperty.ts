import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertEqualsFunction_FunctionalProperty =
  _test_functional_assertEqualsFunction(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertEqualsFunction(p),
  );
