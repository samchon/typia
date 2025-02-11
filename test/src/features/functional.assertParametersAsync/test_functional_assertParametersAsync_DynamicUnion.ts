import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertParametersAsync_DynamicUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertParameters(p),
  );
