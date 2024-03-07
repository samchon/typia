import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateReturnAsync_FunctionalArray =
  _test_functional_validateReturnAsync("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
      typia.functional.validateReturn(p),
  );
