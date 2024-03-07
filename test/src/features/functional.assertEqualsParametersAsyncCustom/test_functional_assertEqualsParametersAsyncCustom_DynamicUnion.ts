import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_DynamicUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "DynamicUnion",
  )(DynamicUnion)((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
