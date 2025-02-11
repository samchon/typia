import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertEqualsReturnAsync_FunctionalTupleUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "FunctionalTupleUnion",
  )(FunctionalTupleUnion)(
    (p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
      typia.functional.assertEqualsReturn(p),
  );
