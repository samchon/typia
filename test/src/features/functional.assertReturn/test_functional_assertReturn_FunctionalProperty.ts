import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_FunctionalProperty =
  _test_functional_assertReturn(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertReturn(p),
  );
