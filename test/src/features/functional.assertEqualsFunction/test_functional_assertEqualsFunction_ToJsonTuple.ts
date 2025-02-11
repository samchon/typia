import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertEqualsFunction_ToJsonTuple =
  _test_functional_assertEqualsFunction(TypeGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => ToJsonTuple) =>
    typia.functional.assertEqualsFunction(p),
  );
