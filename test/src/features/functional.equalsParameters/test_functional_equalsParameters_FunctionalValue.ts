import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_equalsParameters_FunctionalValue =
  _test_functional_equalsParameters("FunctionalValue")(FunctionalValue)(
    (p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.equalsParameters(p),
  );
