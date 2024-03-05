import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateReturn_FunctionalValue =
  _test_functional_validateReturn("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.validateReturn(p),
  );
