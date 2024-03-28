import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_DynamicUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
