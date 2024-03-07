import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_FunctionalArrayUnion =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "FunctionalArrayUnion",
  )(FunctionalArrayUnion)(
    (p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
