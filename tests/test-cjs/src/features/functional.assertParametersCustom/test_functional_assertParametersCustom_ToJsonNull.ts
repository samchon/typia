import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertParametersCustom_ToJsonNull = (): void =>
  _test_functional_assertParameters(CustomGuardError)("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
