import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagArray =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "TypeTagArray",
    )(TypeTagArray)((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
