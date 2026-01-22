import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertParametersAsync_FunctionalArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("FunctionalArray")(
      FunctionalArray,
    )((p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
      typia.functional.assertParameters(p),
    );
