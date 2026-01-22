import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsReturn_FunctionalTuple = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertEqualsReturn(p),
  );
