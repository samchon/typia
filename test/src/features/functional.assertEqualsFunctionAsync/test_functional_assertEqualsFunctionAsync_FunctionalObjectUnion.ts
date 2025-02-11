import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertEqualsFunctionAsync_FunctionalObjectUnion =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "FunctionalObjectUnion",
  )(FunctionalObjectUnion)(
    (p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
      typia.functional.assertEqualsFunction(p),
  );
