import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_assertReturnAsync_FunctionalTupleUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("FunctionalTupleUnion")(
      FunctionalTupleUnion,
    )((p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
      typia.functional.assertReturn(p),
    );
