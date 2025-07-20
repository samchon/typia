import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsReturnAsync_FunctionalValue =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("FunctionalValue")(
      FunctionalValue,
    )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
      typia.functional.assertEqualsReturn(p),
    );
