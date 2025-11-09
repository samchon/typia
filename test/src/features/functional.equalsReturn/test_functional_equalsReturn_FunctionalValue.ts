import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_equalsReturn_FunctionalValue = (): void =>
  _test_functional_equalsReturn("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.equalsReturn(p),
  );
