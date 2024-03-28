import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsParametersCustom_ToJsonNull =
  _test_functional_assertEqualsParameters(CustomGuardError)("ToJsonNull")(
    ToJsonNull,
  )((p: (input: ToJsonNull) => ToJsonNull) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
