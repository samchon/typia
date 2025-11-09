import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_equalsFunctionAsync_FunctionalArray =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("FunctionalArray")(FunctionalArray)(
      (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
        typia.functional.equalsFunction(p),
    );
