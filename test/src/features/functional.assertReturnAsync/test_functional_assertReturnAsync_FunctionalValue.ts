import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertReturnAsync_FunctionalValue =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("FunctionalValue")(
      FunctionalValue,
    )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
      typia.functional.assertReturn(p),
    );
