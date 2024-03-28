import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertEqualsParametersAsync_DynamicUnion =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertEqualsParameters(p),
  );
