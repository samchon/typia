import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertParametersAsync_FunctionalObjectUnion =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "FunctionalObjectUnion",
  )(FunctionalObjectUnion)(
    (p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
      typia.functional.assertParameters(p),
  );
