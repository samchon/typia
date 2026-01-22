import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertFunctionCustom_ToJsonTuple = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
