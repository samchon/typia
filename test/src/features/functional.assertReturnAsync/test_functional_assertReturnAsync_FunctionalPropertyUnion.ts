import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertReturnAsync_FunctionalPropertyUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("FunctionalPropertyUnion")(
    FunctionalPropertyUnion,
  )((p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>) =>
    typia.functional.assertReturn(p),
  );
