import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertReturn_ToJsonTuple = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.assertReturn(p),
  );
