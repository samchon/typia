import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateEqualsReturnAsync_FunctionalValue =
  _test_functional_validateEqualsReturnAsync("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.validateEqualsReturn(p),
  );
