import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertEqualsParameters_ToJsonTuple =
  _test_functional_assertEqualsParameters(TypeGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => ToJsonTuple) =>
    typia.functional.assertEqualsParameters(p),
  );
