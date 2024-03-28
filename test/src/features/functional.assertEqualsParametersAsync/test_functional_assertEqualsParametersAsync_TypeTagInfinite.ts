import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertEqualsParametersAsync_TypeTagInfinite =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "TypeTagInfinite",
  )(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
      typia.functional.assertEqualsParameters(p),
  );
