import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_FunctionalProperty =
  _test_functional_assertFunction(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertFunction(p),
  );
