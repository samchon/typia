import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_assertParametersAsyncCustom_UltimateUnion =
  _test_functional_assertParametersAsync(CustomGuardError)("UltimateUnion")(
    UltimateUnion,
  )((p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
