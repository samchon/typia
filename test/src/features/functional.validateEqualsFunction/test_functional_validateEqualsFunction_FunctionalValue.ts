import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateEqualsFunction_FunctionalValue =
  (): void =>
    _test_functional_validateEqualsFunction("FunctionalValue")(FunctionalValue)(
      (p: (input: FunctionalValue) => FunctionalValue) =>
        typia.functional.validateEqualsFunction(p),
    );
