import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertEqualsParametersAsyncCustom_ToJsonUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
