import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertParametersAsync_FunctionalTupleUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "FunctionalTupleUnion",
    )(FunctionalTupleUnion)(
      (p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
        typia.functional.assertParameters(p),
    );
