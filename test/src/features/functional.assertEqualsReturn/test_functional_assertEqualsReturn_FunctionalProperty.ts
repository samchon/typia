import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertEqualsReturn_FunctionalProperty = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertEqualsReturn(p),
  );
