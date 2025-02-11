import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_isParametersAsync_FunctionalArray =
  _test_functional_isParametersAsync("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
      typia.functional.isParameters(p),
  );
