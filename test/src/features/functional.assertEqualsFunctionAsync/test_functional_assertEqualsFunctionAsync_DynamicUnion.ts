import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertEqualsFunctionAsync_DynamicUnion =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertEqualsFunction(p),
  );
