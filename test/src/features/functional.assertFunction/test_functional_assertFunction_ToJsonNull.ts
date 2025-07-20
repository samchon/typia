import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertFunction_ToJsonNull = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      typia.functional.assertFunction(p),
  );
