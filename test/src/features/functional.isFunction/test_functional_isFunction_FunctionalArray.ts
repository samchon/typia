import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_isFunction_FunctionalArray = (): void =>
  _test_functional_isFunction("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => FunctionalArray) =>
      typia.functional.isFunction(p),
  );
