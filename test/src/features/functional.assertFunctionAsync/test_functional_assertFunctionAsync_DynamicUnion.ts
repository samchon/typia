import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_DynamicUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertFunction(p),
  );
