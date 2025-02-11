import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertFunctionAsync_DynamicUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertFunction(p),
  );
