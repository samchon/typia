import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertReturn_FunctionalProperty = (): void =>
  _test_functional_assertReturn(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertReturn(p),
  );
