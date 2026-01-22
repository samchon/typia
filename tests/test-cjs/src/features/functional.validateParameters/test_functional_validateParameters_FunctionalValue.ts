import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateParameters_FunctionalValue = (): void =>
  _test_functional_validateParameters("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.validateParameters(p),
  );
