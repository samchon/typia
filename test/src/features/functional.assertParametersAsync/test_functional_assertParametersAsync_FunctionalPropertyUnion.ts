import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertParametersAsync_FunctionalPropertyUnion =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "FunctionalPropertyUnion",
  )(FunctionalPropertyUnion)(
    (p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>) =>
      typia.functional.assertParameters(p),
  );
