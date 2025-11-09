import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagPattern =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "TypeTagPattern",
    )(TypeTagPattern)((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
