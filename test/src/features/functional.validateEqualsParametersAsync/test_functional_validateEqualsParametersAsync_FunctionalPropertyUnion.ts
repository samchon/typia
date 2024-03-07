import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_validateEqualsParametersAsync_FunctionalPropertyUnion =
  _test_functional_validateEqualsParametersAsync("FunctionalPropertyUnion")(
    FunctionalPropertyUnion,
  )((p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>) =>
    typia.functional.validateEqualsParameters(p),
  );
