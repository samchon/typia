import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_isParameters_FunctionalValue = (): void =>
  _test_functional_isParameters("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.isParameters(p),
  );
