import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertEqualsFunctionAsync_FunctionalTupleUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "FunctionalTupleUnion",
    )(FunctionalTupleUnion)(
      (p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
        typia.functional.assertEqualsFunction(p),
    );
