import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertEqualsParametersAsync_FunctionalArray =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "FunctionalArray",
  )(FunctionalArray)(
    (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
      typia.functional.assertEqualsParameters(p),
  );
