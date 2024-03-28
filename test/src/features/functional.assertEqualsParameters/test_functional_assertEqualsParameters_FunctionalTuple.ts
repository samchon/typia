import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsParameters_FunctionalTuple =
  _test_functional_assertEqualsParameters(TypeGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => FunctionalTuple) =>
    typia.functional.assertEqualsParameters(p),
  );
