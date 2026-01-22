import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsFunction_FunctionalTuple = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertEqualsFunction(p),
  );
