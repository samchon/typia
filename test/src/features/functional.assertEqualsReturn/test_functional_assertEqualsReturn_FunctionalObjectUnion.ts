import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_FunctionalObjectUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("FunctionalObjectUnion")(
    FunctionalObjectUnion,
  )((p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
    typia.functional.assertEqualsReturn(p),
  );
