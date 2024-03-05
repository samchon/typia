import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateFunction_FunctionalValue =
  _test_functional_validateFunction("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.validateFunction(p),
  );
