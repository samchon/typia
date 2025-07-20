import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertEqualsParametersAsync_FunctionalTupleUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "FunctionalTupleUnion",
    )(FunctionalTupleUnion)(
      (p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
        typia.functional.assertEqualsParameters(p),
    );
