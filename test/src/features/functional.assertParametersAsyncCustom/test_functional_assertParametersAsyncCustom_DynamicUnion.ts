import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertParametersAsyncCustom_DynamicUnion =
  _test_functional_assertParametersAsync(CustomGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
