import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_equalsFunction_FunctionalValue = (): void =>
  _test_functional_equalsFunction("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.equalsFunction(p),
  );
