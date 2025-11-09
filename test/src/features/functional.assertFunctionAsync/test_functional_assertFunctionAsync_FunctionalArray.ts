import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertFunctionAsync_FunctionalArray =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("FunctionalArray")(
      FunctionalArray,
    )((p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
      typia.functional.assertFunction(p),
    );
