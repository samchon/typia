import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertParametersAsyncCustom_FunctionalObjectUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "FunctionalObjectUnion",
    )(FunctionalObjectUnion)(
      (p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
