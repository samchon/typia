import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsParametersAsync_ToJsonNull =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("ToJsonNull")(
    ToJsonNull,
  )((p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.assertEqualsParameters(p),
  );
