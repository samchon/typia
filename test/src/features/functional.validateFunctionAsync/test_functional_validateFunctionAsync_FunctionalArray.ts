import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateFunctionAsync_FunctionalArray =
  _test_functional_validateFunctionAsync("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
      typia.functional.validateFunction(p),
  );
