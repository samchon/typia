import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertParametersAsyncCustom_FunctionalTupleUnion =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "FunctionalTupleUnion",
  )(FunctionalTupleUnion)(
    (p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
