import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagInfinite =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "TypeTagInfinite",
  )(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
