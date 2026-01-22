import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateEqualsReturn_FunctionalValue = (): void =>
  _test_functional_validateEqualsReturn("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.validateEqualsReturn(p),
  );
