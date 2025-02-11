import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_equalsParametersAsync_FunctionalValue =
  _test_functional_equalsParametersAsync("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
      typia.functional.equalsParameters(p),
  );
