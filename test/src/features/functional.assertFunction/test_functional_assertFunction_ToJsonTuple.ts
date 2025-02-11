import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertFunction_ToJsonTuple =
  _test_functional_assertFunction(TypeGuardError)("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.assertFunction(p),
  );
