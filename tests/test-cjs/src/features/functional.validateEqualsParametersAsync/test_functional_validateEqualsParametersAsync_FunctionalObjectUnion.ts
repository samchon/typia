import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_validateEqualsParametersAsync_FunctionalObjectUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("FunctionalObjectUnion")(
      FunctionalObjectUnion,
    )((p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
      typia.functional.validateEqualsParameters(p),
    );
