import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_FunctionalTuple =
  _test_functional_assertParameters(TypeGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertParameters(p),
  );
