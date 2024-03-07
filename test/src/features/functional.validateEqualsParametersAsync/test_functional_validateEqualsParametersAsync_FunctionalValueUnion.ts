import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_validateEqualsParametersAsync_FunctionalValueUnion =
  _test_functional_validateEqualsParametersAsync("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.validateEqualsParameters(p),
  );
