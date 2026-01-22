import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertReturnCustom_ToJsonNull = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
