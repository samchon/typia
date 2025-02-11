import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertEqualsFunctionAsync_FunctionalValueUnion =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "FunctionalValueUnion",
  )(FunctionalValueUnion)(
    (p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
      typia.functional.assertEqualsFunction(p),
  );
