import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_assertReturnAsync_FunctionalArrayUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("FunctionalArrayUnion")(
    FunctionalArrayUnion,
  )((p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
    typia.functional.assertReturn(p),
  );
