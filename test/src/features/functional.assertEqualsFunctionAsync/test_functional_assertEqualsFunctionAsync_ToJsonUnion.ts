import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ToJsonUnion =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
    typia.functional.assertEqualsFunction(p),
  );
