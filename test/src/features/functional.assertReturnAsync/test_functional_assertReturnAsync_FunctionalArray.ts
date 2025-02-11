import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertReturnAsync_FunctionalArray =
  _test_functional_assertReturnAsync(TypeGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.assertReturn(p),
  );
