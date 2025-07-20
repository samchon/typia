import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertParameters_ToJsonTuple = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.assertParameters(p),
  );
