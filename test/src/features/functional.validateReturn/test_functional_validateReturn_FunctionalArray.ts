import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateReturn_FunctionalArray =
  _test_functional_validateReturn("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => FunctionalArray) =>
      typia.functional.validateReturn(p),
  );
