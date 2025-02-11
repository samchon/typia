import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertEqualsParametersAsync_FunctionalPropertyUnion =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "FunctionalPropertyUnion",
  )(FunctionalPropertyUnion)(
    (p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>) =>
      typia.functional.assertEqualsParameters(p),
  );
