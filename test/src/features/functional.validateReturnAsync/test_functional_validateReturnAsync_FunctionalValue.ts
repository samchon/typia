import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateReturnAsync_FunctionalValue =
  _test_functional_validateReturnAsync("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
      typia.functional.validateReturn(p),
  );
