import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateEqualsParametersAsync_FunctionalTuple =
  _test_functional_validateEqualsParametersAsync("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.validateEqualsParameters(p),
  );
