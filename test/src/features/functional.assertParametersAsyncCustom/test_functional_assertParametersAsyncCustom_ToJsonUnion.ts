import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertParametersAsyncCustom_ToJsonUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ToJsonUnion")(
      ToJsonUnion,
    )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
