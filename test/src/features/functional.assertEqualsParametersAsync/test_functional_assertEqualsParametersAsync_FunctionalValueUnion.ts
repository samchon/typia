import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_FunctionalValueUnion =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "FunctionalValueUnion",
  )(FunctionalValueUnion)(
    (p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
      typia.functional.assertEqualsParameters(p),
  );
