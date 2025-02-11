import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertEqualsReturn_ToJsonTuple =
  _test_functional_assertEqualsReturn(TypeGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => ToJsonTuple) =>
    typia.functional.assertEqualsReturn(p),
  );
