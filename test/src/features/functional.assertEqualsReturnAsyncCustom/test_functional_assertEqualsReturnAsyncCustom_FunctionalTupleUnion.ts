import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_FunctionalTupleUnion =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "FunctionalTupleUnion",
  )(FunctionalTupleUnion)(
    (p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
