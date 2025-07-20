import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertFunction_FunctionalProperty = (): void =>
  _test_functional_assertFunction(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertFunction(p),
  );
