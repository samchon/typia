import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertEqualsReturnAsync_FunctionalArray =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("FunctionalArray")(
      FunctionalArray,
    )((p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
      typia.functional.assertEqualsReturn(p),
    );
