import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertParameters_FunctionalTuple = (): void =>
  _test_functional_assertParameters(TypeGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertParameters(p),
  );
