import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_FunctionalValueUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
    typia.functional.assertEqualsReturn(p),
  );
