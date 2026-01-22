import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertFunctionCustom_ToJsonNull = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
